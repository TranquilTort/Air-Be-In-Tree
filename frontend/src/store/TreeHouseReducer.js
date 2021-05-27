//build an articleReducer
import { csrfFetch } from './csrf';


const SET_TreeHouse = 'treehouse/setTreehouse';
//add article constant
const ADD_TreeHouse= 'treehouse/addTreehouse';

const SET_TREETYPES = 'treehouse/getTreeTypes'
//add article action creator
const addOneTreeHouse=(house)=>({
  type:ADD_TreeHouse,
  house
})
function getXSRF(){
  let allCookies = document.cookie.split(';');
  const xsrfval =  allCookies.find(el=> el.includes(`XSRF`)).split('=')[1];
  console.log('THIS THE TOKEN', xsrfval);
  return xsrfval;
}
export const addTreeHouse = data =>async dispatch => {
  console.log('inside store',data)
  const {title,description,imageUrl,treeType,owner} = data;
  const res = await csrfFetch("/api/treehouse", {
    method: "POST",
    body: JSON.stringify({title,description,imageUrl,treeType,owner}),
  });
  if(res.ok){
    const newHouse = await res.json();
    dispatch(addOneTreeHouse(newHouse));
    return newHouse;
  }
};


const setTreeHouses = (houses) =>({
    type: SET_TreeHouse,
    houses
})
const setTreeTypes = (treeTypes) =>({
    type: SET_TREETYPES,
    treeTypes
})

export const getTreeTypes =() => async(dispatch) =>{
    const res = await fetch('/api/treehouse/types');
    const treeTypes = await res.json();

    dispatch(setTreeTypes(treeTypes));
}

export const getTreeHouses = () =>async(dispatch)=> {
    const res = await fetch('/api/treehouse');
    const treehouses = await res.json();
    console.log("HELLOOOO FROM GET HOUSES")
    console.log(treehouses)
    dispatch(setTreeHouses(treehouses));

};

//action
// {
//   type: 'TreeHouse/getTreeHouse',payload:TreeHouse
// }

const initialState = { houses: [], types:[], isLoading: true };

const TreeHouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TREETYPES:
        return {
            ...state, types:action.treeTypes
        }
    case SET_TreeHouse:
      let newHouses ={};
      console.log("INSIDE REDUCER ", action.houses)
      action.houses.forEach((house) => {
        newHouses[house.id] = house;
      });
      console.log({...state, houses: newHouses});
      return {...state, houses: newHouses};
    //add TreeHouse case
    case ADD_TreeHouse:
      return { ...state, houses: {...state.houses, [action.house.id]:action.house}};
    default:
      return state;
  }
};

export default TreeHouseReducer;

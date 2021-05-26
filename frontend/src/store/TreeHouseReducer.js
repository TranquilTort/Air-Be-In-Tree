//build an articleReducer


const SET_TreeHouse = 'treehouse/setTreehouse';
//add article constant
const ADD_TreeHouse= 'treehouse/addTreehouse';
const SET_TREETYPES = 'treehouse/getTreeTypes'
//add article action creator
export const addTreeHouse = (newTreeHouse) => {
  return { type: ADD_TreeHouse, newTreeHouse: newTreeHouse };
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
      return { ...state, TreeHouse: [...state.TreeHouse, action.newTreeHouse] };
    default:
      return state;
  }
};

export default TreeHouseReducer;

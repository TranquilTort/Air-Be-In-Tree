//build an articleReducer


const SET_TreeHouse = 'treehouse/setTreeHouse';
//add article constant
const ADD_TreeHouse= 'treehouse/addTreeHouse';

//add article action creator
export const addTreeHouse = (newTreeHouse) => {
  return { type: ADD_TreeHouse, newTreeHouse: newTreeHouse };
};

const setTreeHouses = (houses) =>({
    type: SET_TreeHouse,
    houses
})

export const getTreeHouse = () =>async(dispatch)=> {
    const res = await fetch('/api/treehouses');
    const treehouses = await res.json();
    dispatch(setTreeHouses(treehouses));

};

//action
// {
//   type: 'TreeHouse/getTreeHouse',payload:TreeHouse
// }

const initialState = { TreeHouse: [], isLoading: true };

const TreeHouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TreeHouse:
      const newState = {};
      action.houses.forEach((house) => {
        newState[house.id] = house;
      });
      return newState;
    //add TreeHouse case
    case ADD_TreeHouse:
      return { ...state, TreeHouse: [...state.TreeHouse, action.newTreeHouse] };
    default:
      return state;
  }
};

export default TreeHouseReducer;

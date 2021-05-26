import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import TreeHouseDisplay from '../TreeHouseDisplay'
import { getTreeHouses,getTreeTypes } from '../../store/TreeHouseReducer';
import './Home.css'
function Home() {
    const treehouses =  useSelector((state)=>Object.values(state.treehouse.houses))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTreeHouses());
    }, [dispatch]);
    console.log('THE HOUSES',treehouses);
    return (
        <div >


            {treehouses && treehouses.map((house,index)=>(
                <TreeHouseDisplay key={index} house={house}></TreeHouseDisplay>
            ))}

            {!treehouses && <div>There doesnt seem to be anything here...</div>}
        </div>
    )
}
export default Home;

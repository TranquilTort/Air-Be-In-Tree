import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { getTreeHouses,getTreeTypes } from '../../store/TreeHouseReducer';
import './TreeHouseDisplay.css'
function TreeHouseDisplay({house}) {
    const [houseImg, setHouseImg] = useState(house.image)
    const treehouselink = `/treehouse/${house.id}`
    const dispatch = useDispatch();
    const treeTypesArr =  useSelector((state)=>Object.values(state.treehouse.types))
    useEffect(() => {
      dispatch(getTreeTypes());
    }, [dispatch]);
    console.log('INSIDE TREE DISPLAY', treeTypesArr)

    let treeTypeBackground= 'http://permacultureapprentice.com/wp-content/uploads/2016/02/cover.jpg';
    if(treeTypesArr.length){

      treeTypeBackground = treeTypesArr.find((el)=>el.id== house.tree_type).image;
    }

    return (
        <div class="center">
          <div class="property-card">
            <a href={treehouselink}>
              <div class="property-image"
               style={{ backgroundImage: `url("${houseImg}")` }}
               >
                <div class="property-image-title">
                  {/* <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. --> */}
                  <h5> {house.title} </h5>
                </div>
              </div></a>
            <div class="property-description"
              style={{backgroundSize: "cover", backgroundImage: `url(${treeTypeBackground})` }}
             >
              <p className='property-description-p'>{house.description}.</p>
            </div>
          </div>
      </div>
    )
}
export default TreeHouseDisplay;

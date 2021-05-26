import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { getTreeHouses,getTreeTypes } from '../../store/TreeHouseReducer';
import './TreeHouseDisplay.css'
function TreeHouseDisplay({house}) {
    console.log('INSIDE TREE DISPLAY', house)
    return (
        <div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image"  style={{ backgroundImage: `url(${house.image})` }} >
        <div class="property-image-title">
          {/* <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. --> */}
          <h5> {house.title} </h5>
        </div>
      </div></a>
    <div class="property-description">

      <p>{house.description}.</p>
    </div>
  </div>
    <button>Book This TreeHouse</button>
</div>
    )
}
export default TreeHouseDisplay;

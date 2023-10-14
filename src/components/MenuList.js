import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {foodItems.map((item, index) => (
    <MenuItem key ={index} items = {item}/> ))}
      
    </div>
  );
}

export default MenuList;


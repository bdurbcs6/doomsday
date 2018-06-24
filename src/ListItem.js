import React from 'react';
import './ListItem.css'

const ListItem = props => {
  return (
    <div
      className="items"
      style={ props.listItem.completed ? {color: "red", fontSize: '.5rem'}  : null }
      onClick={() => props.toggleSingleItem(props.listItem.id)}
    >
      {props.listItem.task}
    </div>
  )
}
 
export default ListItem;
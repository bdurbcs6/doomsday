import React from 'react';

const ListItem = props => {
  return (
    <div
      style={ props.listItem.completed ? {color: "red", fontSize: '.5rem'}  : null }
      onClick={() => props.toggleSingleItem(props.listItem.id)}
    >
      {props.listItem.task}
    </div>
  )
}
 
export default ListItem;
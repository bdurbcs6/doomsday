import React from 'react';

const ListItem = props => {
  return (
    <div>
      {props.listItem.task}
    </div>
  )
}
 
export default ListItem;
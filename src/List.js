import React from 'react';
import ListItem from './ListItem';

const List = props => {
  return (
    <div>
    {props.list.map(list => (
      <ListItem
      listItem={list}
      toggleSingleItem={props.toggleSingleItem}
      />
    ))}
    </div>
  )
}
 
export default List;

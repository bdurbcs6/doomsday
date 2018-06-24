import React from 'react';

const ListForm = props => {
  return (
    <form>
      <input
        onChange={props.updateSingleItem}
        type="text"
        placeholder="add item"
        value={props.value}
      >
      </input>
      <button onClick={props.addSingleItem}>Add It!</button>
      <button onClick={props.removeCompleted}>Got It</button>
    </form>
  )
}
 
export default ListForm;


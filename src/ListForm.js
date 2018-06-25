import React from 'react';
import './ListForm.css';

const ListForm = props => {
  return (
    <form>
      <input
        onChange={props.updateSingleItem}
        type="text"
        placeholder="Pack your bug out bag"
        value={props.value}
      >
      </input>
      <button onClick={props.addSingleItem}>Add It!</button>
      <button onClick={props.removeCompleted}>Got It</button>
    </form>
  )
}
 
export default ListForm;


import React, { useState }  from 'react';
import TodoList from './TodoList';

const List = () =>{
    
  const [InputList, setList] = useState("");
  const [Item, setListItem] = useState([]);

  const ItemEvent = (event) => {
    console.log(event.target.value)
    setList(event.target.value);
  }

  const DisplayItem = () => {
    //making setListItem also an array having oldlistarr as intial value
    setListItem((oldItems) => {
      return [...oldItems, InputList]

    })
    setList("");
  }

  const removeItem = (id) => {
    console.log("Deleted");

    setListItem((oldItems) => {
      return oldItems.filter((arrItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo-List</h1>
          <br />
          <input type="text" placeholder="Add your Item"
            onChange={ItemEvent}
            // name="item" 
            value={InputList}
          />

          <button onClick={DisplayItem} className="btn">+</button>
          <ol>
            {/* <li>{InputList}</li> */}
            {
              Item.map((arrItem, index) => {
                return <TodoList
                  key={index}
                  id={index}
                  text={arrItem}
                  onSelect={removeItem} />
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default List;




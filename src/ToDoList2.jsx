import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './index.css';
import { useState } from 'react';
import ListCom from './ListCom';



// --------ToDoList using Material UI ---------- 

const ToDoList2 = () => {
    const [item, setItem] = useState();

    const [ItemArr, setItemArr] = useState([]);

    const InputText = (event) => {
        setItem(event.target.value);
    }
    const InputItem = () => {
        console.log("clicked")
        setItemArr((prevValue)=>{
            return[...prevValue,item]
        });
       setItem(" ");
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" value={item} placeholder="Add your Item" onChange={InputText} />
                    <Button className="newBtn" onClick={InputItem}>
                        <AddIcon />
                    </Button>

                    <br />
                    <ol>
                           { ItemArr.map((val ,index) => {
                                return (<ListCom text={val} 
                                key ={ index}
                                id = {index}
                                />);
                                
                            }) }
                        
                    </ol>
                    <br />
                </div>
            </div>
        </>

    );
}

export default ToDoList2;
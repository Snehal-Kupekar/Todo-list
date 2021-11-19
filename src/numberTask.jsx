import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const Num = () => {
  const [Number, setNumber] = useState(0)
  const IncrementNo = () => {
    setNumber(Number + 1);
  }
  const DecrementNo = () => {
    if (Number > 0) {
      setNumber(Number - 1);
    } else {
      setNumber(0);
      alert("Sorry!,Your limit is over");
    }

  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1 className="head">{Number}</h1>
          <Tooltip title="Add">
          <Button variant="outlined" className="btn_style" onClick={IncrementNo}><AddIcon /></Button>
          </Tooltip>

          <Tooltip title="Delete">
          <Button variant="outlined" className="btn_style" onClick={DecrementNo}><RemoveIcon /></Button>
          </Tooltip>
        </div>
      </div>

    </>
  );
}

export default Num;
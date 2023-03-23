import React from "react";
import TimeInterval from "./Actions/TimeInterval";
import Activities from "./Actions/Activities";
import Generate from "./Actions/Generate";
import LookUp from "./Actions/LookUp";

function ListItem({ itemNumber, setItemNumber, setInt, setAct, setGen, setSee, setPayload }) {
  return (
    <>
      {itemNumber === 0 && <TimeInterval setInt={setInt} setPayload={setPayload} setItemNumber={setItemNumber} />}
      {itemNumber === 1 && <Activities setAct={setAct} setPayload={setPayload} setItemNumber={setItemNumber}/>}
      {itemNumber === 2 && <Generate setGen={setGen} setPayload={setPayload} setItemNumber={setItemNumber}/>}
      {itemNumber === 3 && <LookUp setSee={setSee} setPayload={setPayload} setItemNumber={setItemNumber}/>}
    </>
  );
}

export default ListItem;

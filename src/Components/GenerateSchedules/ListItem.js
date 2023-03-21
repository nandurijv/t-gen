import React, { useState } from "react";
import TimeInterval from "./Actions/TimeInterval";
import Activities from "./Actions/Activities";
import Generate from "./Actions/Generate";
import LookUp from "./Actions/LookUp";

function ListItem({ itemNumber, setInt, setAct, setGen, setSee, setPayload }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState();
  return (
    <>
      {itemNumber === 0 && <TimeInterval setInt={setInt} setPayload={setPayload} />}
      {itemNumber === 1 && <Activities setAct={setAct} setPayload={setPayload} />}
      {itemNumber === 2 && <Generate setGen={setGen} setPayload={setPayload} />}
      {itemNumber === 3 && <LookUp setSee={setSee} setPayload={setPayload} />}
    </>
  );
}

export default ListItem;

import React, { useState, useContext } from "react";
import { Context } from "./index";

function ChildOne() {
  const [data, setData] = useContext(Context);
  const [value, setValue] = useState(false)
  const [id, setId] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setData(preState => [...preState, { id: id, name: value }])
  }
  return (
    <div>
      <p>ChildOne</p>
      {data?.length}
      <br />
      <input type="text" onChange={e => setValue(e.target.value)} />
      <input type="number" onChange={e => setId(e.target.value)} />
      <button onClick={handleChange}>Click to add</button>
    </div>
  );
}

export default ChildOne;

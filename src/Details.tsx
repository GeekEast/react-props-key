import React, { useState } from "react";
import Pet from "./Pet";
const Details = () => {
  const [id, setId] = useState(0);

  return (
    <div>
      <h1>Details {id}</h1>
      <Pet id={id} key={id} />
      <button onClick={() => setId(id => id + 1)}>Increase Details ID</button>
    </div>
  );
};

export default Details;

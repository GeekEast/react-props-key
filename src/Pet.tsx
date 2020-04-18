import React, { useState } from "react";

const Pet = (props: { id: number }) => {
  const [petid, setPetId] = useState(props.id);

  return (
    <div>
      <h1>Pet {petid}</h1>
      <button onClick={() => setPetId(i => i + 1)}>Increase Pet ID</button>
    </div>
  );
};

export default Pet;

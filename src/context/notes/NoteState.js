import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Harry",
    class: "5b",
  };

  const [state, setState] = useState(s1);
  const update = () => {
    setState(
      {
        name: "Larry",
        class: "10b",
      },
      1000
    );
  };
  
  return (
    <noteContext.Provider value={{ state, update }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

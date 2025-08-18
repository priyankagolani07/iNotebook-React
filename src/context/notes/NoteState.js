import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "689f710e73935f9f1df1bb4d",
      user: "689b29eb9a869c77094773f4",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-08-15T17:40:30.393Z",
      __v: 0,
    },
    {
      _id: "689f710f73935f9f1df1bb4f",
      user: "689b29eb9a869c77094773f4",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-08-15T17:40:31.332Z",
      __v: 0,
    },
    {
      _id: "689f710e73935f9f1df1bb4d",
      user: "689b29eb9a869c77094773f4",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-08-15T17:40:30.393Z",
      __v: 0,
    },
    {
      _id: "689f710f73935f9f1df1bb4f",
      user: "689b29eb9a869c77094773f4",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-08-15T17:40:31.332Z",
      __v: 0,
    },
    {
      _id: "689f710e73935f9f1df1bb4d",
      user: "689b29eb9a869c77094773f4",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-08-15T17:40:30.393Z",
      __v: 0,
    },
    {
      _id: "689f710f73935f9f1df1bb4f",
      user: "689b29eb9a869c77094773f4",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-08-15T17:40:31.332Z",
      __v: 0,
    },
    {
      _id: "689f710e73935f9f1df1bb4d",
      user: "689b29eb9a869c77094773f4",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2025-08-15T17:40:30.393Z",
      __v: 0,
    }
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

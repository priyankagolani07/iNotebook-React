import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get all Notes
  const getNotes = async () => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5YjI5ZWI5YTg2OWM3NzA5NDc3M2Y0In0sImlhdCI6MTc1NTAwNjcwMn0.dXuuttpjbmF_6f4AdUy3B4raQxRI8bLSS0aMzOv9P3k",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5YjI5ZWI5YTg2OWM3NzA5NDc3M2Y0In0sImlhdCI6MTc1NTAwNjcwMn0.dXuuttpjbmF_6f4AdUy3B4raQxRI8bLSS0aMzOv9P3k",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log(response);
    console.log("adding a new note");
    const note = {
      _id: "689f710e73935f9f1df1bb4d711",
      user: "689b29eb9a869c77094773f4",
      title: title,
      description: description,
      tag: tag,
      date: "2025-08-15T17:40:30.393Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5YjI5ZWI5YTg2OWM3NzA5NDc3M2Y0In0sImlhdCI6MTc1NTAwNjcwMn0.dXuuttpjbmF_6f4AdUy3B4raQxRI8bLSS0aMzOv9P3k",
      },
      body: JSON.stringify(),
    });
    const json = response.json();
    console.log(json);
    console.log("deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg5YjI5ZWI5YTg2OWM3NzA5NDc3M2Y0In0sImlhdCI6MTc1NTAwNjcwMn0.dXuuttpjbmF_6f4AdUy3B4raQxRI8bLSS0aMzOv9P3k",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    console.log("editing the note with id" + id);
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

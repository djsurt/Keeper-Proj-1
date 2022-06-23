import React, { useState } from "react";
import notes from "../notes";
import Note from "./Note";

function CreateArea(props) {

  let [note, setNote] = useState({
    title:"",
    content:""
  });

  function handleClick(event){
    props.changeNotes((prevValue) => {
      return [...prevValue, note]
    });
    setNote({
      title:"",
      content:""
    });
    notes.map((note)=>{
      return <Note title={note.title} content={note.content}/>
    });
  }

  function handleChange(event){
    let {
      name: name,
      content: value
    } = event.target;
    if(name === "title"){
      setNote((prevValue)=>{
        return {
              ...prevValue,
              title: value
          };
      });
    } else if(name==="content"){
      setNote(
        (prevValue) => {
          console.log("Hi");
          return {
            ...prevValue,
            content: value
          };
        }
      );
    }
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {

  const [note, setNote] = useState({
    title:"",
    content:""
  });

  function handleClick(){

  }

  function handleChange(event){
    var [name, value, placeholder, onChange] = event.target;
    if(name === "title"){
      setNote((prevValue)=>{
        prevValue,
        title: value
      });
    }
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
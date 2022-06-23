import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setNotes] = useState([]);

    return <div>
        <Header></Header>
        <CreateArea changeNotes = {setNotes} notes = {notes}></CreateArea>
        <Footer></Footer>
    </div>;
}

export default App;
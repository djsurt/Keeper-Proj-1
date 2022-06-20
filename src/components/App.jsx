import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setNotes] = useState([]);

    return <div>
        <Header></Header>
        <CreateArea notes = {notes}></CreateArea>
        <Note key={1} title="Note title" content="Note content" />
        <Footer></Footer>
    </div>;
}

export default App;
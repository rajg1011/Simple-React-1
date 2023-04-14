import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";

function makeNotes(elementFromNotes){
    return <Note 
    heading= {elementFromNotes.title}
    para= {elementFromNotes.content}
    />
}

function App(){
    return ( 
    <div>
        <Header />
        {notes.map(makeNotes)}
        <Footer />
    </div>
    );
}

export default App;
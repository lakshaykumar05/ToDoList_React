// import { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';


function App() {

  // const [Notes, setNotes] = useState([]);  // Another method to add a Note here instead of Main.js

  // const AddNoteInNotes = (Note) => {

  //     // const newNotesList = [...Notes, Note];

  //     setNotes([...Notes, Note]);
  // };


  return (
    <div>
      <Header />
      {/* <Main AddNoteInNotes = {AddNoteInNotes}/> */}
      <Main/>
    </div>
  );
}

export default App;

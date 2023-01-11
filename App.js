import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Home from './src/screens/home';
import AddNote from './src/screens/addNotes';
import EditNote from './src/screens/editNotes';


const CurrentPageWidget = ({ currentPage, noteData, setCurrentPage, addNote, setDataList, editData, dataList, dellData }) => {
  switch (currentPage) {
    case 'home':
      return <Home noteData={noteData} setCurrentPage={setCurrentPage} setDataList={setDataList} dellData={dellData} />;
    case 'add':
      // Berikan function "addNote" ke  component
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} setDataList={setDataList} dataList={dataList} editData={editData} />;
    default:
      return <Home />;
  }
};

CurrentPageWidget.propTypes = {
  currentPage: PropTypes.string.isRequired,
  noteData: PropTypes.instanceOf(Array).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  // Tambahkan validasi type untuk "addNote"
  addNote: PropTypes.func.isRequired,

  dataList: PropTypes.object.isRequired,
  setDataList: PropTypes.func.isRequired,
  editData: PropTypes.func.isRequired,

  dellData: PropTypes.func.isRequired
};



const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [dataList, setDataList] = useState({});

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ]);

  // const [editNoteList, setEditNoteList] = useState();

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = (id, title, desc) => {
    const editData = noteList.filter((note) => note.id != id);
    setNoteList([
      ...editData,
      {
        id, title, desc
      }
    ])
  };

  const dellNote = (id) => {
    const editData = noteList.filter((note) => note.id != id);
    setNoteList([
      ...editData,
    ])
  };



  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteData={noteList}
      addNote={addNote}
      editData={editNote}
      dataList={dataList}
      setDataList={setDataList}
      dellData={dellNote}
    />
  )
};

export default App;
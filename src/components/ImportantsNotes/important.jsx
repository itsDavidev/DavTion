import { useState, useEffect, useContext } from 'react';
import { Ć’GetImportantsNotes } from '../../Firebase/ActionFirebase';
import { ContextUser } from '../../Utils/context';
import NotesR from '../NotesR/NotesR';
import ButtonGoBack from '../buttonGoBack';
const ImportantNotes = () => {
  const { authUser } = useContext(ContextUser);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    authUser.isLoggedIn && Ć’GetImportantsNotes({ authUser, setNotes });
  }, []);
  return (
    <>
      <NotesR notes={notes} Tnotes="Important" />
      <ButtonGoBack />
    </>
  );
};

export default ImportantNotes;

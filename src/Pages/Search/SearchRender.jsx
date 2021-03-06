import { useState, useEffect, useContext } from 'react';
import { ƒGetAllNotes } from '../../Firebase/ActionFirebase';
import { ContextUser } from '../../Utils/context';
import { GrSearchAdvanced } from 'react-icons/gr';

const SearchRender = () => {
  const [notes, setNotes] = useState([]);
  const { authUser } = useContext(ContextUser);
  const [searchNotes, setsearch] = useState([]);

  const ƒSearchNotes = (evt) => {
    evt.preventDefault();
    if (evt.target.value === '') return setsearch([]);
    setsearch(
      notes.filter((note) =>
        note.title.toLowerCase().includes(evt.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    ƒGetAllNotes({ authUser, setNotes });
  }, []);

  return (
    <>
      <h1>search</h1>
      <form>
        <label>
          <GrSearchAdvanced className="icon" />
          <input
            onChange={ƒSearchNotes}
            type="text"
            name="search"
            className="inputSearch"
            autoComplete="on"
          />
        </label>
        {searchNotes.map((notes) => {
          return (
            <div key={notes.id}>
              <button
                onClick={() => {
                  navigate(`/notes/searh/id/${notes.id}`);
                }}
                key={notes.id}
              >
                {notes.title}
              </button>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default SearchRender;

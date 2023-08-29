import { createContext, useContext, useState } from 'react';

const NoteContext = createContext();

export const useNoteContext = () => {
    return useContext(NoteContext);
};

export const NoteProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);

    const updateNotes = (newNote) => {
        setNotes([newNote, ...notes]);
    };

    return (
        <NoteContext.Provider value={{ notes, updateNotes }}>
            {children}
        </NoteContext.Provider>
    );
};

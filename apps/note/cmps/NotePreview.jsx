import { NoteTxt } from "./dynamic-note/NoteTxt.jsx"
import { NoteImg } from "./dynamic-note/NoteImg.jsx"

const NOTE_TYPE_COMPONENTS = {
    txt: NoteTxt,
    img: NoteImg,
}

export function NotePreview({ note }) {
    const NoteComponent = NOTE_TYPE_COMPONENTS[note.type] || null
    return (
        <article className="note-preview">
            <h3>Title: {note.info.title}</h3>
            <p>
                Created At: {note.createdAt}<br />
                Type: {note.type}<br />
                Pinned: {note.isPinned ? 'Yes' : 'No'}<br />
                Background Color: {note.style.backgroundColor}
            </p>
            {NoteComponent ? <NoteComponent info={note.info} /> : <p>Unsupported note type</p>}
            <p>{note.info.txt}</p>
        </article>
    )
}
const { Route, Routes, Navigate } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./views/About.jsx"
import { Home } from "./views/Home.jsx"
import { MailIndex } from "./apps/mail/views/MailIndex.jsx"
import { EmailDetails } from "./apps/mail/views/MailDetails.jsx";
import { NoteIndex } from "./apps/note/views/NoteIndex.jsx"
import { Trash } from "./apps/note/views/Trash.jsx"
import { Archives } from "./apps/note/views/Archives.jsx"
import { NoteList } from "./apps/note/views/NoteList.jsx"
import { Reminders } from "./apps/note/views/Reminders.jsx"
import { EditLabels } from "./apps/note/views/Editlabels.jsx"

export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/mail/:mailId" element={<EmailDetails />} />
                <Route path="/note" element={<NoteIndex />} >
                <Route index element={<Navigate to="/note/noteList" />} />
                    <Route path="/note/noteList" element={<NoteList />}/>
                    <Route path="/note/reminders" element={<Reminders />}/>
                    <Route path="/note/editLabels" element={<EditLabels />}/>
                    <Route path="/note/archives" element={<Archives />}/>
                    <Route path="/note/trash" element={<Trash />}/>
                </Route>
            </Routes>
        </section>
    </Router>
}
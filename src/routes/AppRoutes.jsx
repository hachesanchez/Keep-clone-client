import { Route, Routes } from 'react-router-dom'
import NotesListPage from '../pages/NotesListPage/NotesListPage'
//import NewNotePage from '../pages/NewNotePage/NewNotePage'
import HomePage from '../pages/HomePage/HomePage'
//import Message from '../NO/Training/Message'
//import Tutorial from '../NO/Training/Tutorial'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import SignupPage from '../pages/SignupPage/SignUpPage'
import WellcomePage from '../pages/WellcomePage/WellcomePage'

const AppRoutes = ({ searchTerm }) => {


    return (

        <Routes>

            <Route path="/acceder" element={<WellcomePage />} />
            <Route path='/registro' element={<SignupPage />} />

            <Route path='/' element={<HomePage searchTerm={searchTerm} />} />
            <Route path='/notas' element={<NotesListPage />} />
            <Route path='/recordatorios' element={<h1>RECORDATORIOS</h1>} />
            <Route path='/archivadas' element={<h1>ARCHIVADAS</h1>} />
            {/* <Route path='/papelera' element={<h1>BASURILLA</h1>} /> */}
            {/* <Route path='/papelera' element={<Tutorial />} /> */}
            <Route path='/etiqueta/:id' element={<h1>TAG WHATEVER</h1>} />
            {/* <Route path='/crear-nota' element={<NewNotePage />} /> */}

            <Route path='/editar-etiquetas' element={<h1>EDITAR ETIQUETAS</h1>} />
            <Route path='/perfil' element={<ProfilePage />} />
            <Route path='*' element={<h1>Error 404</h1>} />

            <Route path='/usuarios' element={<h1>TODAS LAS USUARIAS</h1>} />



        </Routes>
    )
}

export default AppRoutes

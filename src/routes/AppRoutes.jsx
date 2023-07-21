import { Route, Routes } from 'react-router-dom'
import NotesListPage from '../pages/NotesListPage/NotesListPage'
import NewNotePage from '../pages/NewNotePage/NewNotePage'
import HomePage from '../pages/HomePage/HomePage'
import ChartJsPage from '../pages/ChartJsPage/ChartJsPage'
import NoteDetailsPage from '../pages/NoteDetailsPage'

const AppRoutes = () => {
    return (

        <Routes>

            <Route path="/acceder" element={<h1 >ACCEDER Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum hic quis esse totam! Enim, ab nobis corrupti ullam fugit error beatae, obcaecati voluptatem sit voluptatum officia non facilis delectus.</h1>} />
            <Route path='/registro' element={<h1>REGISTRO</h1>} />
            <Route path='/' element={<HomePage />} />
            <Route path='/notas' element={<NotesListPage />} />
            {/* <Route path='/nota/:id' element={<NoteDetailsPage />} /> */}
            <Route path='/recordatorios' element={<ChartJsPage />} />
            <Route path='/archivadas' element={<h1>ARCHIVADAS</h1>} />
            <Route path='/papelera' element={<h1>BASURILLA</h1>} />
            <Route path='/etiqueta/:id' element={<h1>TAG WHATEVER</h1>} />
            <Route path='/crear-nota' element={<NewNotePage />} />

            <Route path='/editar-etiquetas' element={<h1>EDITAR ETIQUETAS</h1>} />
            <Route path='/perfil' element={<h1>PERFIL</h1>} />
            <Route path='*' element={<h1>Error 404</h1>} />

            <Route path='/usuarios' element={<h1>TODAS LAS USUARIAS</h1>} />



        </Routes>
    )
}

export default AppRoutes

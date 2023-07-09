import { Route, Routes } from 'react-router-dom'
import NotesListPage from '../pages/NotesListPage/NotesListPage'

const AppRoutes = () => {

    return (

        <Routes>

            <Route path="/acceder" element={<h1 >ACCEDER Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum hic quis esse totam! Enim, ab nobis corrupti ullam fugit error beatae, obcaecati voluptatem sit voluptatum officia non facilis delectus.</h1>} />
            <Route path='/registro' element={<h1>REGISTRO</h1>} />
            <Route path='/' element={<h1>INICIO</h1>} />
            <Route path='/notas' element={<NotesListPage />} />
            <Route path='/nota/:id' element={<h1>NOTA WHATEVER</h1>} />
            <Route path='/recordatorios' element={<h1>TODAS LAS NOTAS</h1>} />
            <Route path='/papelera' element={<h1>BASURILLA</h1>} />
            <Route path='/etiqueta/:id' element={<h1>TAG WHATEVER</h1>} />
            <Route path='/editar-etiquetas' element={<h1>EDITAR ETIQUETAS</h1>} />
            <Route path='/perfil' element={<h1>PERFIL</h1>} />
            <Route path='*' element={<h1>Error 404</h1>} />

            <Route path='/usuarios' element={<h1>TODAS LAS USUARIAS</h1>} />



        </Routes>
    )
}

export default AppRoutes

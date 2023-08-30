import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Sidebar from './components/Sidebar/Sidebar'
import { useState } from 'react'
import { NoteProvider } from './contexts/NoteContext'

function App() {

  const [searchTerm, setSearchTerm] = useState('')


  return (

    // <NoteProvider>
    <div className="App">

      <Navigation onFilter={setSearchTerm} searchTerm={searchTerm} />
      <AppRoutes searchTerm={searchTerm} />

    </div>
    // </NoteProvider>

  )
}

export default App

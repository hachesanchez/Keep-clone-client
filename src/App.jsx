import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (

    <div className="App">
      <Navigation />
      <AppRoutes />
      {/* <Sidebar /> */}
    </div>

  )
}

export default App

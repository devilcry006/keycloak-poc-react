import './App.css'
import { KeycloakProvider } from './context/KeycloakContext'
import Home from './pages/home'

function App() {

  return (
    <>
      <KeycloakProvider>
        <Home />
      </KeycloakProvider>
    </>
    
  )
 
}
export default App

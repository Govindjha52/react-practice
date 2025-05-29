import './App.css'
import Login from './component/login'
import Profile from './component/profile'
import Usercontextprovider from './context/usercontextprovider'
function App() {
  return (
    <Usercontextprovider>
     <h2>context Api</h2>
     <Login/>
     <Profile/>
    </Usercontextprovider>
  )
}

export default App

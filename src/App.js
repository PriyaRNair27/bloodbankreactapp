import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './Components/View';
import Searchdonor from './Components/Searchdonor';


function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path="/"exact element={<Signup/>}/>
<Route path="/signin" exact element={<Signin/>}/>
  <Route path="/view"exact element={<View/>}/>
  <Route path="/search"exact element={<Searchdonor/>}/>
  

  </Routes></BrowserRouter>

    </div>
  )
}

export default App;

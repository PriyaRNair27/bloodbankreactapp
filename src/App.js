import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './Components/View';


function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path="/"exact element={<Signup/>}/>
<Route path="/signin" exact element={<Signin/>}/>
  <Route path="/view"exact element={<View/>}/>
  

  </Routes></BrowserRouter>

    </div>
  )
}

export default App;

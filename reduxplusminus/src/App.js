
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useSelector } from 'react-redux';
// import { plus,minus } from './actions/actions';
// import { useDispatch } from 'react-redux'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './Components/Products';
import Home from './Components/Home';
function App() {
  // const dispatch = useDispatch()
  // const data = useSelector(item=> item.jogbiyog)
  
  return (
    <>
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home />}></Route>               
                <Route path="/products" element={<Products />}></Route>
              
          </Routes>
        </BrowserRouter>

        
    </>
  );
}

export default App;

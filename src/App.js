import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Header from "./pages/Header/Header"
import Footer from "./pages/Footer/Footer"
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Menu/>
            <Footer/>
          </Route>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;

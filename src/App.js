import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar/Navbar"
import Header from "./pages/Header/Header"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
    </div>
  );
}

export default App;

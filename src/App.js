import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Orders from "./pages/Orders/Orders";
import OrderSuccess from "./pages/Orders/OrderSuccess";
import Homepage from "./pages/Homepage/Homepage";
import Home from "./pages/Admin/Home";
import Productlist from "./pages/Admin/Listproduct/Productlist";


function App() {

  return (
    <div className="App">      
      <BrowserRouter>  
        <Switch> 
          <Route path="/" exact component={Homepage} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/ordersuccess" exact component={OrderSuccess} />
          <Route path="/admin" exact component={Home} />
          <Route path="/admin/product-list" exact component={Productlist} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

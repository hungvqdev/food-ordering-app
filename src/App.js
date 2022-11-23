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
import Editproduct from "./pages/Admin/Editproduct/Editproduct";
import AddProduct from "./pages/Admin/AddProduct/AddProduct";
import OrdersAdmin from "./pages/Admin/OrdersAdmin/OrdersAdmin";
import Users from "./pages/Admin/Users/Users";
import User from "./pages/User/User";


function App() {

  return (
    <div className="App">      
      <BrowserRouter>  
        <Switch> 
          <Route path="/" exact component={Homepage} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/user" exact component={User} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/ordersuccess" exact component={OrderSuccess} />
          <Route path="/admin" exact component={Home} />
          <Route path="/admin/products" exact component={Productlist} />
          <Route path="/admin/products/:productId" exact component={Editproduct} />
          <Route path="/admin/add-product" exact component={AddProduct} />
          <Route path="/admin/orders" exact component={OrdersAdmin} />
          <Route path="/admin/users" exact component={Users} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

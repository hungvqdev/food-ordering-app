import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
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

  var userData = JSON.parse(localStorage.getItem('currentUser'))
  
  return (
    <div className="App">      
      <BrowserRouter>  
        <Switch> 
          <Route path="/" exact component={Homepage} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/user" exact render={() => {
            return userData ? <User/> : <Redirect to='/login'/>
          }} />
          <Route path="/orders" exact render={() => {
            return userData ? <Orders/> : <Redirect to='/login'/>
          }} />
          <Route path="/ordersuccess" exact component={OrderSuccess} />
          <Route path="/admin" exact render={() => {
            return userData && userData.isAdmin === true ? <Home/> : <Redirect to='/'/>
          }} />
          <Route path="/admin/products" exact render={() => {
            return userData && userData.isAdmin === true ? <Productlist/> : <Redirect to='/'/>
          }}  />
          <Route path="/admin/products/:productId" exact render={() => {
            return userData && userData.isAdmin === true ? <Editproduct/> : <Redirect to='/'/>
          }} />
          <Route path="/admin/add-product" exact render={() => {
            return userData && userData.isAdmin === true ? <AddProduct/> : <Redirect to='/'/>
          }} />
          <Route path="/admin/orders" exact render={() => {
            return userData && userData.isAdmin === true ? <OrdersAdmin/> : <Redirect to='/'/>
          }} />
          <Route path="/admin/users" exact render={() => {
            return userData && userData.isAdmin === true ? <Users/> : <Redirect to='/'/>
          }} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

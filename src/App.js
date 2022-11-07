import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Orders from "./pages/Orders/Orders";
import OrderSuccess from "./pages/Orders/OrderSuccess";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
            <Menu />
            <Footer />
          </Route>
          <Route path="/cart" exact component={Cart} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/ordersuccess" exact component={OrderSuccess} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

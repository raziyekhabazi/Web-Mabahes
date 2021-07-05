import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import AboutUs from "./pages/aboutUs";
import Menu from "./pages/menu";
import Gallery from "./pages/gallery";
import ContactUs from "./pages/contactUs";
import Reserve from "./pages/reserve";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/about_us" component={AboutUs} exact />
        <Route path="/our_menu" component={Menu} exact />
        <Route path="/gallery" component={Gallery} exact />
        <Route path="/contact_us" component={ContactUs} exact />
        <Route path="/reserve" component={Reserve} exact />
      </Switch>
    </Router>
  );
}

export default App;

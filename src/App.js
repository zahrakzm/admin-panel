import "./assets/custom.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Messages from "./components/Messages";
import News from "./components/News";
import Notification from "./components/Notifications";
import Blog from "./components/Blog";
import Dashboard from "./pages/Dashboard";
import View from "./pages/View";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
        <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/message">
              <Messages />
            </Route>
            <Route path="/notifications">
              <Notification />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/view" component={View} />
              <Route path="/edit" component={Edit} />
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
};

export default App;

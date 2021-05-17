import "./assets/custom.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Messages from "./components/Messages";
import News from "./components/News";
import Notification from "./components/Notifications";
import Blog from "./components/Blog";


const App = () => {
  return (
    <div className="App">
      
      <Router>
   <Header />
   <div className= 'container2'>
   <Sidebar />
     <Switch>
       <Route  exact path = '/' component= {Home} />
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
     </Switch>
     </div>
   </Router>

      <div className="container">
     
      </div>
      <Footer />
    </div>
  );
};

export default App;

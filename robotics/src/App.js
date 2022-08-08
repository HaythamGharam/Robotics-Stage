import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import Home from "./components/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import About from "./components/about/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;

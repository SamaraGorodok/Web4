import logo from './logo.svg';
import './App.css';
import TypeAuth from "./Components/Auth/authType";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRoute, routes} from "./Components/Auth/Routes";
import Header from "./Components/Header/header"

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>{routes.map((route)=>{
              return <Route path={route.path} element={<AppRoute component={route.component} isPrivate={route.isPrivate}/>}/>
          })}</Routes>
      </BrowserRouter>
  );
}

export default App;

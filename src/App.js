import React from "react"; 
import './App.scss';
import Header from './compoments/Header';
import HomeBanner from "./compoments/HomeBanner";
import Login from "./compoments/Login";
import Banner from "./compoments/Banner";
import List from "./compoments/List";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Header/>
              <HomeBanner/>
            </React.Fragment>
          }/>
          <Route path="/login" element={
            <React.Fragment>
              <Header/>
              <Login page={true}/>
            </React.Fragment>
          }/>
          <Route path="/register" element={
            <React.Fragment>
              <Header/>
              <Login page={false}/>
            </React.Fragment>
          }/>
          <Route path="/dashboard" element={
            <React.Fragment>
            <Header/>
            <Banner/>
            <List title="Netflix Original" param="originals"/>
            <List title="Trending Now" param="trending"/>
            <List title="Action Thriller" param="top_rated"/>
            <List title="Upcoming movie" param="upcoming"/>
            <List title="Now Playing" param="now_playing"/>
            <List title="Popular" param="popular"/>
          </React.Fragment>
          }/>

          
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import Layout from "./Layout.js";
import Home from "./Components/Home.js";
import Header from "./Components/Header.js";
// import NavigationBar from "./Components/NavBar.js";
// import "./App.css";

function App() {
  return (
    // <div className="App">
    <div>
      {/* <NavigationBar /> */}
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;

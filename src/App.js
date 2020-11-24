import React from "react";
import Header from "./Header";

// ini adalah arrow components
const Navbar = () => {
  return (
    <div>
      <h3>ini beda ya</h3>
    </div>
  );
};

// ini adalah function components
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <h2>Hello World</h2>
    </div>
  );
}

export default App;

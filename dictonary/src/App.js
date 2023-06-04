import logo from "./logo.svg";
import "./App.css";

import Dictonary from "./Dictonary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictonary defaultKeyword="sun" />
        </main>
        <footer className="App-footer">coded by Fidelis</footer>
      </div>
    </div>
  );
}

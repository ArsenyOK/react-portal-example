import React, { useState } from "react";
import "./App.css";
import ModalPortal from "./Portals/ModalPortal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="wrapper">
      <header>
        <menu>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </menu>
      </header>
      <main>
        <section>
          <button onClick={toggleOpen}>Open window</button>
        </section>
        <aside>
          <ModalPortal isOpen={isOpen} toggleOpen={toggleOpen} />
        </aside>
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;

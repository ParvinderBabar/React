import "./App.css";
let projectName = "foodRecepie";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with parvinder
    //     </a>
    //   </header>
    // </div>
    <>
      <div className="main">
        <h1> {projectName}</h1>
      </div>
      <div className="container">
        <nav>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </nav>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          voluptas quam corporis cum magnam quas aliquam perspiciatis explicabo
          aspernatur. Architecto quod saepe, sunt est corrupti dolores
          accusantium laboriosam adipisci laudantium.
        </p>
        <h1> babel compiles jsx down to react.createElement() calls</h1>
      </div>
    </>
  );
}

export default App;

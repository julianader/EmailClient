import Navbar1 from './Components/Navbar'
import Top from './Components/top.js'
import Main from './Components/Main.js'

function App() {
  return( 
  <div>
      <div className="container">
        <Navbar1 text="Email Client"></Navbar1>
        <Top />
        <Main />
      </div>
  </div>
  );
}

export default App;

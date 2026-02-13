import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textbox2 from './component/Textbox2';

function App() {
  return (
 <div>
      <Navbar title="TextUtil" about="About us"/>
      <div className="container">
        <Textbox2/>
      </div>
    </div>
  );
}

export default App;

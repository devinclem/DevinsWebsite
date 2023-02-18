import Navbar from './navbar';
import Home from './home';
import './index.css';

function App() {
  const title = "Devin Clemons";
  const likes = 50;
  const person = {name: "Devin", job: "Software Developer"}
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home />
      </div>

    </div>
  );
}

export default App;

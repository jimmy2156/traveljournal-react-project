
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import data1 from './data';

function App() {
  const card = data1.map(x => <Main {...x}/>)
  return (
    <div className="App">
      <Navbar />
      {card}
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
function App() {
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2> Hello {1 + 1}</h2> 
      <Header title={1}/>    
    </div>
  );
}

export default App;

import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Header';
import { categories } from './helper/data'

function App() {
  return (
    <div className="App">
      <Header/>
      <Card data={categories}/>
    </div>
  );
}

export default App;

import './App.css';
import { Filters } from './components/Filters/Filters';
import { Header } from './components/Header/Header';
import { Tickets } from './components/Tickets/Tickets';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Filters />
        <Tickets />
      </div>
    </div>
  );
}

export default App;

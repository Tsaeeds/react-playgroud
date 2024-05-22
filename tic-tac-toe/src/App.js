import './App.css';
import Board from './components/Board';
import { PlayerContextProvider } from './store/PlayerContext';

function App() {
  return (
    <PlayerContextProvider>
       <Board />
    </PlayerContextProvider>
    
  );
}

export default App;

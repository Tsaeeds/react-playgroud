import './App.css';
import Box from './components/Box';
import { PlayerContextProvider } from './store/PlayerContext';

function App() {
  return (
    <PlayerContextProvider>
       <Box />
    </PlayerContextProvider>
    
  );
}

export default App;

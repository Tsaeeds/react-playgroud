import './App.css';
import Box from './components/Box';
import Header from './components/Header';
import Summary from './components/Summary';
import { PlayerContextProvider } from './store/PlayerContext';

function App() {


  return (

      <PlayerContextProvider>
        <Header />
        <Box />
        <Summary />
      </PlayerContextProvider>
    
  );
}

export default App;

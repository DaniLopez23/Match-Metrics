import './App.css';
import StatsRecorder from './components/StatsRecorder';

function App() {
  return (
    <div className="App">
      <StatsRecorder stats={["Stat 1", "Stat 2", "Stat 3"]} />
      <StatsRecorder stats={["Stat 1", "Stat 2", "Stat 3"]} />
    </div>
  );
}

export default App;

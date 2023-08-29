import './App.css';
import Devs from './Components/Devs/Devs';
import Libreries from './Components/Libreries/Libreries';
import ProjectView from './Components/ProjectView/ProjectView';

function App() {
  return (
    <div className="App">
      <ProjectView/>
      <Devs/>
      <Libreries/>
    </div>
  );
}

export default App;

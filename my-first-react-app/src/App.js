import './App.css';
// import ProfileCard from './Profilecard';
import { CreateJob } from './component/CreateJob';
import { Header } from './component/Header';
import { Footer } from './component/Footer';

function App() {
  
  return (
    <div className='App'><Header/><CreateJob runJob="UAT App Scheduled" fiscalYear="2021"/><Footer/></div>
  );
}



export default App;
 
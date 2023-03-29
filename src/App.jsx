import './styles/reset.css';
import './styles/App.css';
import InfoCard from './components/infoCard/InfoCard';
import CoundDownSection from './components/sections/coundDown/CoundDownSection';

function App() {
  return (
    <div className="">
      <h1>Styled components</h1>
      {false && <InfoCard />}
      <CoundDownSection />
    </div>
  );
}
export default App;

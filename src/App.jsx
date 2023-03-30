import './styles/reset.css';
import './styles/App.css';
import InfoCard from './components/infoCard/InfoCard';
import CoundDownSection from './components/sections/coundDown/CoundDownSection';
import TestStyles from './components/test/TestStyles';

function App() {
  return (
    <div className="">
      <h1>Styled components</h1>
      {false && <InfoCard />}
      {false && <CoundDownSection />}
      <TestStyles />
    </div>
  );
}
export default App;

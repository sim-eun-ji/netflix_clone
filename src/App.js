import './App.scss';
import Header from './component/Header';
import Banner from './component/Banner';
import FAQ from './component/FAQ';
import Membership from './component/Membership';
import Whyjoin from './component/Whyjoin';
import Footer from './component/Footer';
import MoveSlider from './component/MoveSlider';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <MoveSlider />
      <Whyjoin />
      <FAQ />
      <Membership className="style"/>
      <Footer />
    </div>
  );
};

export default App;
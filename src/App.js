import './App.scss';
import Banner from './component/Banner';
import FAQ from './component/FAQ';
import Header from './component/Header';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <FAQ />
    </div>
  );
};

export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './component/Header';
import Banner from './component/Banner';
import FAQ from './component/FAQ';
import Membership from './component/Membership';
import Whyjoin from './component/Whyjoin';
import Footer from './component/Footer';
import MoveSlider from './component/MoveSlider';
import Login from './component/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <div className='app'>
            <Header />
            <Banner />
            <MoveSlider />
            <Whyjoin />
            <FAQ />
            <Membership className="style"/>
            <Footer />
          </div>
        }/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import './App.css';
import { Navbar } from './components';
import { Feedback, Header } from './containers';
import Booking from './containers/Booking/Booking';
import BstTraveler from './containers/bstTraveler/BstTraveler';
import Features from './containers/features/Features';
import Footer from './containers/Footer/Footer';
import LetsFly from './containers/LetsFly/LetsFly';
import Memory from './containers/Memory/Memory';
import News from './containers/News/News';
import Popular from './containers/popular/Popular';
function App() {
  return (
    <div className='App'>
      <div className="gradient-bg">
        <Navbar />
        <Header />
        <Booking />
      </div>
      <Features />
      <LetsFly />
      <Popular />
      <BstTraveler />
      <Feedback />
      <Memory />
      <News />
      <Footer />
    </div>
  );
}

export default App;

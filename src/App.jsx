import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import WhySense from './components/WhySense';
import Contact from './components/Contact';
import Gambling from './pages/Gambling';

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <Solutions />
      <Industries />
      <WhySense />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gambling" element={<Gambling />} />
    </Routes>
  );
}

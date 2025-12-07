import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import Section1_Overview from './components/Section1_Overview';
import Section2_Profiles from './components/Section2_Profiles';
import Section3_Challenges from './components/Section3_Challenges';
import Section4_Initiatives from './components/Section4_Initiatives';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return (
          <div className="page-content">
            <ImpactSection />
            <Section1_Overview />
          </div>
        );
      case 'profiles':
        return (
          <div className="page-content">
            <Section2_Profiles />
          </div>
        );
      case 'challenges':
        return (
          <div className="page-content">
            <Section3_Challenges />
          </div>
        );
      case 'initiatives':
        return (
          <div className="page-content">
            <Section4_Initiatives />
          </div>
        );
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      {currentPage !== 'home' && <Footer />}
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TickerTape from './components/TickerTape/TickerTape';
import AssetsSection from './components/AssetsSection/AssetsSection';
import NewsSection from './components/NewsSection/NewsSection';
import ToolsSection from './components/ToolsSection/ToolsSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TickerTape />
      <AssetsSection />
      <ToolsSection />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default App;
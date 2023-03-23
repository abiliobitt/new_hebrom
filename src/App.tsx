import React from 'react';
import Navbar from './components/header';
import HomeBanner from './components/homeBanner';

function App() {
  return (
    <div className="App">
      <Navbar isMobile={false} />
      <HomeBanner />
    </div>
  );
}

export default App;

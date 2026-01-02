import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProactiveAgent } from './components/ProactiveAgent';
import { PrivacyFirst } from './components/PrivacyFirst';
import { HowItWorks } from './components/HowItWorks';
import { Hardware } from './components/Hardware';
import { ExpressiveInterface } from './components/ExpressiveInterface';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ProactiveAgent />
        <PrivacyFirst />
        <HowItWorks />
        <Hardware />
        <ExpressiveInterface />
      </main>
      <Footer />
    </>
  );
}

export default App;

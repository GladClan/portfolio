import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import PrinciplesSection from './sections/PrinciplesSection';
import ProfessionalSection from './sections/ProfessionalSection';
import SpiritualSection from './sections/SpiritualSection';
// import FaithSection from './sections/FaithSection';
import EthicsSection from './sections/EthicsSection';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <a href="#home" className={styles.skipLink}>
        Skip to content
      </a>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <PrinciplesSection />
        <ProfessionalSection />
        <SpiritualSection />
        {/* <FaithSection /> */}
        <EthicsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

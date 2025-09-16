import MotionLayers from './components/background/MotionLayers';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ChatButton from './components/chat/ChatButton';
import HomeView from './app/HomeView';
import ProjectsView from './app/ProjectsView';
import AboutView from './app/AboutView';
import ContactView from './app/ContactView';
import './styles/globals.css';
import './styles/theme.css';

function App() {
  return (
    <div className="min-h-screen text-white relative">
      <MotionLayers />
      <div className="relative z-10">
        <Header />

        <main>
          <HomeView />
          <ProjectsView />
          <AboutView />
          <ContactView />
        </main>

        <Footer />
      </div>
      <ChatButton />
    </div>
  );
}

export default App;

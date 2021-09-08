import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './Main'
import ReactGA from 'react-ga';
function App() {
  const initializeReactGA = () => {
    ReactGA.initialize('G-JGNS8CT6T5');
    ReactGA.pageview('/');
}
  return (
    <main class="d-flex">
    <Sidebar />
    <div class="flex-grow-1 main">
      <Header />
      <Main />
    </div>
  </main>
  );
}

export default App;

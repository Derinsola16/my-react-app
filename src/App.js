import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './Main'
function App() {
  const name = 'Funmi'
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

import Header from './components/Header/Header';
import './App.scss';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

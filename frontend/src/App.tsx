import Header from './components/Header';
import './App.scss';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
}

export default App;

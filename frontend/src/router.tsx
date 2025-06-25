import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import RecentEvents from './pages/RecentEvents';
import PioneerLadder from './pages/PioneerLadder';
import StandardLadder from './pages/StandardLadder';
import SummerLeague2025 from './pages/SummerLeague2025';
import Players from './pages/Players';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'recent-events', element: <RecentEvents /> },
      { path: 'pioneer-ladder', element: <PioneerLadder /> },
      { path: 'standard-ladder', element: <StandardLadder /> },
      { path: 'summer-league-2025', element: <SummerLeague2025 /> },
      { path: 'players', element: <Players /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

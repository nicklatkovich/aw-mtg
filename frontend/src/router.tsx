import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import RecentEventsPage from './pages/RecentEventsPage';
import SummerLeague2025 from './pages/SummerLeague2025';
import Players from './pages/Players';
import NotFound from './pages/NotFound';
import TournamentPage from './pages/TournamentPage';
import PlayerPage from './pages/PlayerPage';
import { PioneerLadder2025 } from './pages/PioneerLadder';
import { StandardLadder2025 } from './pages/StandardLadder';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Navigate to={'/recent-events'} /> },
      { path: '/recent-events', index: true, element: <RecentEventsPage /> },
      { path: '/pioneer-ladder', element: <PioneerLadder2025 /> },
      { path: '/standard-ladder', element: <StandardLadder2025 /> },
      { path: '/summer-league-2025', element: <SummerLeague2025 /> },
      { path: '/players', element: <Players /> },
      { path: '/event/:id', element: <TournamentPage /> },
      { path: '/player/:id', element: <PlayerPage /> },
      { path: '/*', element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

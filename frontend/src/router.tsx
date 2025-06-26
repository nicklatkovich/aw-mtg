import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import RecentEventsPage from './pages/RecentEventsPage';
import PioneerLadder from './pages/PioneerLadder';
import StandardLadder from './pages/StandardLadder';
import SummerLeague2025 from './pages/SummerLeague2025';
import Players from './pages/Players';
import NotFound from './pages/NotFound';
import TournamentPage from './pages/TournamentPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'recent-events', element: <RecentEventsPage /> },
      { path: 'pioneer-ladder', element: <PioneerLadder /> },
      { path: 'standard-ladder', element: <StandardLadder /> },
      { path: 'summer-league-2025', element: <SummerLeague2025 /> },
      { path: 'players', element: <Players /> },
      { path: 'event/:id', element: <TournamentPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

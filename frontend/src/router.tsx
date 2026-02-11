import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import { ArchivePage } from './pages/ArchivePage';
import { LeaguesPage } from './pages/LeaguesPage';
import NotFound from './pages/NotFound';
import { PioneerLadder } from './pages/PioneerLadder';
import PlayerPage from './pages/PlayerPage';
import PlayersListPage from './pages/PlayersListPage';
import RecentEventsPage from './pages/RecentEventsPage';
import { StandardLadder2025 } from './pages/StandardLadder';
import TournamentPage from './pages/TournamentPage';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Navigate to={'/recent-events'} /> },
      { path: '/recent-events', index: true, element: <RecentEventsPage /> },
      {
        path: '/pioneer-ladder-2025',
        element: <PioneerLadder name="Pioneer Ladder 2025" link="pioneer-ladder-2025" />,
      },
      {
        path: '/pioneer-ladder-2026',
        element: <PioneerLadder name="Pioneer Ladder 2026" link="pioneer-ladder-2026" />,
      },
      { path: '/standard-ladder-2025', element: <StandardLadder2025 /> },
      { path: '/players', element: <PlayersListPage /> },
      { path: '/event/:id', element: <TournamentPage /> },
      { path: '/player/:id', element: <PlayerPage /> },
      { path: '/leagues', element: <LeaguesPage /> },
      { path: '/leagues/:id', element: <LeaguesPage /> },
      { path: '/archive', element: <ArchivePage /> },
      { path: '/*', element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

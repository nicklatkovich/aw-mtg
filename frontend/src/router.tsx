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

const leagues: { pageId: string; filename: string; displayName: string }[] = [
  { pageId: 'fall-league-2025', filename: '2025-2', displayName: 'Fall League 2025' },
  { pageId: 'spring-league-2026', filename: '2026-1', displayName: 'Spring League 2026' },
];

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
      ...leagues.flatMap(({ pageId, filename, displayName }) => [
        { path: `/${pageId}`, element: <LeaguesPage pageId={pageId} filename={filename} displayName={displayName} /> },
        {
          path: `/${pageId}/:id`,
          element: <LeaguesPage pageId={pageId} filename={filename} displayName={displayName} />,
        },
      ]),
      { path: '/archive', element: <ArchivePage /> },
      { path: '/*', element: <NotFound /> },
      // legacy redirects
      { path: '/leagues/fall-league-2025-standard', element: <Navigate to="/fall-league-2025/standard" /> },
      { path: '/leagues/fall-league-2025-pioneer', element: <Navigate to="/fall-league-2025/pioneer" /> },
      { path: '/leagues/fall-league-2025-pauper', element: <Navigate to="/fall-league-2025/pauper" /> },
      { path: '/leagues/fall-league-2025-eternal', element: <Navigate to="/fall-league-2025/eternal" /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

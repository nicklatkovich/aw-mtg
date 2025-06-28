import { RecentTournamentsTableRowDTO } from '@dtos';
import DeckComponent from '@frontend/components/Deck/DeckComponent';
import FormatComponent from '@frontend/components/FormatComponent';
import { WithJsonData } from '@frontend/components/WithJsonDataComponent';
import { useNavigate } from 'react-router-dom';

export default function RecentEventsPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Recent Events</h1>
      <WithJsonData<RecentTournamentsTableRowDTO[]> url="/data/recent-tournaments.json">
        {(data) => (
          <table border={1} cellPadding={4} style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Format</th>
                <th>Players</th>
                <th>Winner</th>
                <th>Deck</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} onClick={() => navigate(`/event/${row.id}`)} className="link">
                  <th className="left">{row.name ?? `Event [${row.id}]`}</th>
                  <th>{row.date}</th>
                  <th>
                    <FormatComponent value={row.format} />
                  </th>
                  <th>{row.players_count}</th>
                  <th>{row.winner.player}</th>
                  <th className="left">
                    <DeckComponent deck={row.winner.deck} />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </WithJsonData>
    </>
  );
}

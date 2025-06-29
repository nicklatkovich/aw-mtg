import { RecentTournamentsTableRowDTO } from '@dtos';
import DeckComponent from '@frontend/components/Deck/DeckComponent';
import FormatComponent from '@frontend/components/FormatComponent';
import { WithJsonData } from '@frontend/components/WithJsonDataComponent';
import { Link } from 'react-router-dom';

export default function RecentEventsPage() {
  return (
    <>
      <h1>Recent Events</h1>
      <WithJsonData<RecentTournamentsTableRowDTO[]> url={`${import.meta.env.BASE_URL}data/recent-tournaments.json`}>
        {(data) => (
          <div
            className="grid-table"
            style={{ gridTemplateColumns: Array.from({ length: 6 }, () => 'auto').join(' ') }}
          >
            <div style={{ display: 'contents' }}>
              <div className="cell">Name</div>
              <div className="cell">Date</div>
              <div className="cell">Format</div>
              <div className="cell">Players</div>
              <div className="cell">Winner</div>
              <div className="cell">Deck</div>
            </div>
            {data.map((row) => (
              <div style={{ display: 'contents' }}>
                <Link style={{ display: 'contents' }} to={`/event/${row.id}`}>
                  <div className="cell left">{row.name ?? `Event [${row.id}]`}</div>
                  <div className="cell">{row.date}</div>
                  <div className="cell">
                    <FormatComponent value={row.format} />
                  </div>
                  <div className="cell">{row.players_count}</div>
                  <div className="cell">
                    <Link to={`/player/${row.winner.player.id}`}>{row.winner.player.display_name}</Link>
                  </div>
                  <div className="cell left">
                    <DeckComponent deck={row.winner.deck} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </WithJsonData>
    </>
  );
}

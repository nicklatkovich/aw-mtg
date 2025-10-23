import { PlayerDTO } from '@dtos';
import ColorStatsComponent from '@frontend/components/ColorStats';
import FormatComponent from '@frontend/components/FormatComponent';
import { WithJsonData } from '@frontend/components/WithJsonDataComponent';
import { Link } from 'react-router-dom';

export default function PlayersListPage() {
  return (
    <WithJsonData<PlayerDTO[]> url={`${import.meta.env.BASE_URL}data/players-list.json`}>
      {(data) => (
        <div>
          <h1>Players List</h1>
          <div
            className="grid-table"
            style={{ gridTemplateColumns: Array.from({ length: 5 }, () => `auto`).join(' ') }}
          >
            <div style={{ display: 'contents' }}>
              <div className="cell">Colors</div>
              <div className="cell">Name</div>
              <div className="cell">Events</div>
              <div className="cell">MW / MP</div>
              <div className="cell">Favorite Format</div>
            </div>
            {data
              .sort(
                (a, b) =>
                  b.events_count - a.events_count ||
                  b.match_played - a.match_played ||
                  b.match_wins - a.match_wins ||
                  a.id.localeCompare(b.id),
              )
              .map((player) => (
                <div key={player.id} style={{ display: 'contents' }}>
                  <ColorStatsComponent className="cell" colorStats={player.color_stats} scale={0.5} />
                  <div className="cell left">
                    <Link to={`/player/${player.id}`}>{player.display_name}</Link>
                  </div>
                  <div className="cell">{player.events_count}</div>
                  <div className="cell">
                    {player.match_played === 0 ? (
                      <span>N/A</span>
                    ) : (
                      <>
                        <span>{((player.match_wins / player.match_played) * 100).toFixed(2)}%</span>
                        <span style={{ marginLeft: 16 }}>
                          ({player.match_wins} / {player.match_played})
                        </span>
                      </>
                    )}
                  </div>
                  <div className="cell">
                    {!player.favorite_format?.[0] ? (
                      <span>N/A</span>
                    ) : (
                      <>
                        <FormatComponent value={player.favorite_format[0]} />
                        <span style={{ marginLeft: 8 }}>({(player.favorite_format[1] * 100).toFixed(2)}%)</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </WithJsonData>
  );
}

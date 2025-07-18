import { PlayerDTO } from '@dtos';
import { WithJsonData } from '@frontend/components/WithJsonDataComponent';

export default function PlayersListPage() {
  return (
    <WithJsonData<PlayerDTO[]> url={`${import.meta.env.BASE_URL}data/players-list.json`}>
      {(data) => (
        <div>
          <h1>Players List</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Events Count</th>
                <th>MW / MP</th>
                <th>Favorite Format</th>
              </tr>
            </thead>
            <tbody>
              {data
                .sort((a, b) => (
                  b.events_count - a.events_count ||
                    b.match_played - a.match_played ||
                    b.match_wins - a.match_wins ||
                    a.id.localeCompare(b.id);
                ))
                .map((player) => (
                  <tr key={player.id}>
                    <td>{player.display_name}</td>
                    <td>{player.events_count}</td>
                    <td>
                      {player.match_played === 0 ? (
                        <span>N/A</span>
                      ) : (
                        <>
                          <span>{((player.match_wins / player.match_played) * 100).toFixed(2)}%</span>
                          <span>
                            ({player.match_wins} / {player.match_played})
                          </span>
                        </>
                      )}
                    </td>
                    <td>{player.favorite_format ? player.favorite_format[0] : 'N/A'}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </WithJsonData>
  );
}

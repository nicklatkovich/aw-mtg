import { TournamentResultDTO } from '@dtos';
import { useParams, Link } from 'react-router-dom';
import { WithJsonData } from '@frontend/components/WithJsonDataComponent';
import DeckComponent from '@frontend/components/Deck/DeckComponent';
import FormatComponent from '@frontend/components/FormatComponent';

const TournamentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;
  const melee = /^[1-9]\d*$/.test(id) ? `https://melee.gg/Tournament/View/${id}` : null;

  return (
    <>
      {/* <h1>Event [{id}]</h1> */}
      <WithJsonData<TournamentResultDTO> url={`/data/tournaments/${id}.json`}>
        {(data) => {
          const rounds = Math.max(...data.standings.map((s) => s.rounds?.length ?? 0));
          const displayMatchRecord = data.standings.some((s) => s.match_record);
          const displayGameRecord = data.standings.some((s) => s.game_record);
          const displayDecks = data.standings.some((s) => s.deck);
          return (
            <>
              {data.name ? <h1>{data.name}</h1> : null}
              <div>
                Date: <span className="date">{data.date}</span>
              </div>
              <div>
                Format: <FormatComponent value={data.format} />
              </div>
              <div>
                Players: <span className="number">{data.standings.length}</span>
              </div>
              {melee ? (
                <a href={melee} target="_blank" rel="noopener noreferrer">
                  {melee}
                </a>
              ) : null}
              <table style={{ marginTop: 32 }}>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Points</th>
                    {displayDecks ? <th>Deck</th> : null}
                    {displayMatchRecord ? <th>Match Record</th> : null}
                    {displayGameRecord ? <th>Game Record</th> : null}
                    {...Array.from({ length: rounds })
                      .fill(0)
                      .map((_, i) => <th key={i.toString(10)}>Round #{i + 1}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {data.standings.map((s) => (
                    <tr key={s.rank}>
                      <th>{s.rank}</th>
                      <th>
                        <Link to={`/player/${s.player.id}`}>{s.player.display_name}</Link>
                      </th>
                      <th>{s.points}</th>
                      {displayDecks ? (
                        <th className="left">
                          <DeckComponent deck={s.deck} />
                        </th>
                      ) : null}
                      {displayMatchRecord ? <th>{s.match_record}</th> : null}
                      {displayGameRecord ? <th>{s.game_record}</th> : null}
                      {...Array.from({ length: rounds })
                        .fill(0)
                        .map((_, i) => {
                          const r = s.rounds?.[i];
                          if (!r) return <th>-</th>;
                          if (r === 'bye') return <th className="round--bye">bye</th>;
                          let className = '';
                          if (r.res === -1) className = 'round--lose';
                          else if (r.res === 0) className = 'round--draw';
                          else if (r.res === 1) className = 'round--win';
                          return (
                            <th className={className}>
                              {r.vs}: {r.record}
                            </th>
                          );
                        })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          );
        }}
      </WithJsonData>
    </>
  );
};

export default TournamentPage;

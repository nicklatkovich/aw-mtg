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
      <WithJsonData<TournamentResultDTO> url={`${import.meta.env.BASE_URL}data/tournaments/${id}.json`}>
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
              <div
                style={{
                  marginTop: 32,
                  gridTemplateColumns: [
                    'auto',
                    'auto',
                    'auto',
                    ...(displayDecks ? ['auto'] : []),
                    ...(displayMatchRecord ? ['auto'] : []),
                    ...(displayGameRecord ? ['auto'] : []),
                    ...Array.from({ length: rounds }, () => 'minmax(0, 1fr)'),
                  ].join(' '),
                }}
                className="grid-table"
              >
                <div style={{ display: 'contents' }}>
                  <div className="cell">Rank</div>
                  <div className="cell">Player</div>
                  <div className="cell">Points</div>
                  {displayDecks ? <div className="cell">Deck</div> : null}
                  {displayMatchRecord ? <div className="cell">Match Record</div> : null}
                  {displayGameRecord ? <div className="cell">Game Record</div> : null}
                  {Array.from({ length: rounds }).map((_, i) => (
                    <div key={i.toString(10)} className={`cell ${rounds > 5 ? 'small-font' : ''}`}>
                      Round #{i + 1}
                    </div>
                  ))}
                </div>
                {data.standings.map((s) => (
                  <div key={s.rank} style={{ display: 'contents' }}>
                    <div className="cell">{s.rank}</div>
                    <div className="cell left">
                      <Link to={`/player/${s.player.id}`}>{s.player.display_name}</Link>
                    </div>
                    <div className="cell">{s.points}</div>
                    {displayDecks ? (
                      <div className="cell left">
                        <DeckComponent deck={s.deck} />
                      </div>
                    ) : null}
                    {displayMatchRecord ? <div className="cell">{s.match_record}</div> : null}
                    {displayGameRecord ? <div className="cell">{s.game_record}</div> : null}
                    {Array.from({ length: rounds }).map((_, i) => {
                      let className = `cell ${rounds > 5 ? 'small-font' : ''}`;
                      const r = s.rounds?.[i];
                      if (!r) return <div className={className}>-</div>;
                      if (r === 'bye') return <div className={`${className} round--bye`}>bye</div>;
                      if (r.res === -1) className += ' round--lose';
                      else if (r.res === 0) className += ' round--draw';
                      else if (r.res === 1) className += ' round--win';
                      const record = r.record ?? (r.res === -1 ? 'lose' : r.res === 0 ? 'draw' : 'win');
                      return (
                        <div key={i.toString(10)} className={className}>
                          {r.pod === undefined ? r.vs : String.fromCharCode(64 + r.pod)}: {record}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </>
          );
        }}
      </WithJsonData>
    </>
  );
};

export default TournamentPage;

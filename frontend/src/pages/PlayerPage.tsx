import { PlayerDTO } from '@dtos';
import ColorStatsComponent from '@frontend/components/ColorStats';
import DeckComponent from '@frontend/components/Deck/DeckComponent';
import FormatComponent from '@frontend/components/FormatComponent';
import { GridCell, TruncatableGridCell } from '@frontend/components/GridCell';
import { WithJsonData } from '@frontend/components/WithJsonDataComponent';
import { Link, useParams } from 'react-router-dom';

export default function PlayerPage() {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;
  return (
    <>
      <WithJsonData<PlayerDTO> url={`${import.meta.env.BASE_URL}data/players/${id}.json`}>
        {(data) => (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h1>{data.display_name}</h1>
              <ColorStatsComponent colorStats={data.color_stats} scale={1} />
            </div>
            <div>id: {data.id}</div>
            <h2>Events</h2>
            <div
              className="grid-table"
              style={{
                gridTemplateColumns: ['minmax(0, 1fr)', ...Array.from({ length: 7 }, () => 'auto')].join(' '),
              }}
            >
              <div style={{ display: 'contents' }}>
                <div className="cell">Name</div>
                <div className="cell">Date</div>
                <div className="cell">Format</div>
                <div className="cell">Points</div>
                <div className="cell">Rank</div>
                <div className="cell">Deck</div>
                <div className="cell">Match Record</div>
                <div className="cell">Game Record</div>
              </div>
              {data.recent_events.map((t) => (
                // FIXME: key
                <Link style={{ display: 'contents' }} key={t.date} to={`/event/${t.id}`}>
                  <TruncatableGridCell left title={t.name}>
                    <span>{t.name ?? `Event #${t.id}`}</span>
                  </TruncatableGridCell>
                  <GridCell>{t.date}</GridCell>
                  <GridCell>
                    <FormatComponent value={t.format} />
                  </GridCell>
                  <GridCell>{t.points}</GridCell>
                  <GridCell>
                    {t.rank[0]} / {t.rank[1]}
                  </GridCell>
                  <TruncatableGridCell left title={t.deck?.archetype}>
                    <DeckComponent deck={t.deck} />
                  </TruncatableGridCell>
                  <GridCell>{t.match_record}</GridCell>
                  <GridCell>{t.game_record}</GridCell>
                </Link>
              ))}
            </div>
          </>
        )}
      </WithJsonData>
    </>
  );
}

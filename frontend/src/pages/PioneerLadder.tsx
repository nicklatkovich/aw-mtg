import { PioneerLadderInfoDto } from '@dtos';
import DeckComponent from '@frontend/components/Deck/DeckComponent';
import { WithJsonData } from '@frontend/components/WithJsonDataComponent';
import { Link } from 'react-router-dom';

export const PioneerLadder: React.FC<{ name: string; link: string }> = (props) => (
  <WithJsonData<PioneerLadderInfoDto> url={`${import.meta.env.BASE_URL}data/${props.link}.json`}>
    {(data) => (
      <>
        <h1>{props.name}</h1>
        <div>
          Events: <span className="number">{data.totalEvents}</span>
        </div>
        <div>
          Players: <span className="number">{data.table.length}</span>
        </div>
        <div
          className="grid-table"
          style={{
            gridTemplateColumns: ['auto', 'minmax(0, 1fr)', ...Array.from({ length: 5 }, () => 'auto')].join(' '),
            marginTop: 32,
          }}
        >
          <div style={{ display: 'contents' }}>
            <div className="cell">rank</div>
            <div className="cell">player</div>
            <div className="cell">points</div>
            <div className="cell">events</div>
            <div className="cell">MW/MP</div>
            <div className="cell">4-0s</div>
            <div className="cell">favorite deck</div>
          </div>
          {data.table.slice(0).map((row, i) => (
            <div style={{ display: 'contents' }}>
              <div className={`cell ${data.finished && i < 3 ? 'red-highlight' : ''}`}>{row.rank}</div>
              <div className={`cell ${data.finished && i < 3 ? 'red-highlight' : ''}`}>
                <Link to={`/player/${row.player.id}`}>{row.player.display_name}</Link>
              </div>
              <div className={`cell ${row.points >= 200 ? 'red-highlight' : ''}`}>{row.points}</div>
              <div className="cell">{row.events}</div>
              <div className="cell">
                {((row.mw / row.mp) * 100).toFixed(2)}% ({row.mw}/{row.mp})
              </div>
              <div className="cell">{row._4_0s > 0 ? row._4_0s : ''}</div>
              <div className="cell left">
                {row.favorite_deck ? (
                  <>
                    <DeckComponent deck={row.favorite_deck.deck} /> &nbsp; (
                    {Math.round(row.favorite_deck.percentage * 100)}%)
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </WithJsonData>
);

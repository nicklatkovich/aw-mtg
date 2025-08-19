import { StandardLadderDto } from '@dtos';
import DeckComponent from '@frontend/components/Deck/DeckComponent';
import { WithJsonData } from '@frontend/components/WithJsonDataComponent';
import { Link } from 'react-router-dom';

export const StandardLadder2025: React.FC = () => (
  <WithJsonData<StandardLadderDto> url={`${import.meta.env.BASE_URL}data/standard-ladder.json`}>
    {(data) => (
      <>
        <h1>Standard Ladder 2025</h1>
        <div>
          Events: <span className="number">{data.totalEvents}</span>
        </div>
        <div>
          Players: <span className="number">{data.standings.length}</span>
        </div>
        <div
          className="grid-table standard"
          style={{
            gridTemplateColumns: ['auto', 'auto', '1fr', ...Array.from({ length: 13 - 3 }, () => 'auto')].join(' '),
            marginTop: 32,
          }}
        >
          <div style={{ display: 'contents' }}>
            <div className="cell">rank</div>
            <div className="cell">lvl</div>
            <div className="cell">Name</div>
            <div className="cell">points</div>
            <div className="cell">events</div>
            <div className="cell">win</div>
            <div className="cell">lose</div>
            <div className="cell">draw</div>
            <div className="cell">win, %</div>
            <div className="cell">win/(win+lose), %</div>
            <div className="cell" style={{ width: 'min-content' }}>
              events
              <br />
              won
            </div>
            <div className="cell">
              major
              <br /> events won
            </div>
            <div className="cell">favorite deck</div>
          </div>
          {data.standings.slice(0).map((row) => (
            <div style={{ display: 'contents' }}>
              <div className="cell">{row.rank}</div>
              <div className="cell">{row.lvl}</div>
              <div className="cell">
                <Link to={`/player/${row.player.id}`}>{row.player.display_name}</Link>
              </div>
              <div className="cell">{row.points}</div>
              <div className="cell">{row.events}</div>
              <div className="cell">{row.vmw}</div>
              <div className="cell">{row.vml}</div>
              <div className="cell">{row.draw}</div>
              <div className="cell">{((row.vmw / row.vmp) * 100).toFixed(2)}</div>
              <div className="cell">{((row.vmw / (row.vmw + row.vml + row.draw)) * 100).toFixed(2)}</div>
              <div className="cell">{row.events_won || ''}</div>
              <div className="cell">{row.major_events_won || ''}</div>
              <div className="cell left">
                {row.favorite_deck ? (
                  <>
                    <DeckComponent deck={row.favorite_deck.deck} blackBorder /> &nbsp; (
                    {Math.round(row.favorite_deck.percentage)}%)
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

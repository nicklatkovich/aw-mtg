import { LeagueDto } from '@dtos';
import { WithJsonData } from '@frontend/components/WithJsonDataComponent';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';

function calcNewPlayerMaxPoints(league: LeagueDto): number {
  let result = 0;
  const eventsLeft = league.total_events - league.past_events;
  // 12 points per event plus 1 point for each event with 4-0
  if (eventsLeft > 6) result += 6 * 13;
  else result += eventsLeft * 13;
  // plus bonus points for events beyond 6
  if (eventsLeft > 6) result += eventsLeft - 6;
  return result;
}

export const LeagueComponent: React.FC<{ league: LeagueDto }> = ({ league }) => {
  const maxPointsSorted = league.players.map((p) => p.max_points).sort((a, b) => b - a);
  const finalistPointsThreshold = maxPointsSorted[league.top] ?? calcNewPlayerMaxPoints(league);
  const minMaxPointsToMakeTop = league.players[league.top - 1]?.total_points ?? 0;
  const displayMaxPoints =
    ((league.players[0].total_points ?? 0) > finalistPointsThreshold ||
      league.players.some((p) => p.max_points < minMaxPointsToMakeTop)) &&
    league.past_events < league.total_events;

  return (
    <div className="league-details">
      {/* <h1>{league.display_name}</h1> */}
      <div
        className="grid-table"
        style={{
          gridTemplateColumns: [
            '48px',
            '256px',
            '64px',
            '64px',
            ...Array.from({ length: league.total_events + (displayMaxPoints ? 1 : 0) }, () => '48px'),
          ].join(' '),
        }}
      >
        <div style={{ display: 'contents' }}>
          <div className="cell">rank</div>
          <div className="cell">player</div>
          <div className="cell">events</div>
          <div className="cell">points</div>
          {Array.from({ length: league.total_events }).map((_, i) => (
            <div className="cell" key={i}>
              {league.event_ids[i] !== null ? i + 1 : '-'}
            </div>
          ))}
          {displayMaxPoints && <div className="cell">max</div>}
        </div>
        {league.players.slice(0).map((player, index) => (
          <div
            style={{ display: 'contents' }}
            key={player.id}
            className={[
              index + 1 === league.top ? 'last-top' : '',
              displayMaxPoints && player.max_points < minMaxPointsToMakeTop ? 'red-row' : '',
              player.total_points > finalistPointsThreshold ? 'green-row' : '',
            ].join(' ')}
          >
            <div className="cell">{index + 1}</div>
            <div className="cell">{player.display_name}</div>
            <div className="cell">{player.event_count}</div>
            <div className={`cell total-points`}>{player.total_points}</div>
            {player.points.map((p, i) => (
              <div className="cell" key={i}>
                {p ?? ''}
              </div>
            ))}
            {displayMaxPoints && <div className="cell">{player.max_points}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export const LeaguesPage: React.FC<{ pageId: string; filename: string; displayName: string }> = (props) => {
  const navigate = useNavigate();

  const params = useParams<{ id?: string }>();

  return (
    <WithJsonData<LeagueDto[]> url={`${import.meta.env.BASE_URL}data/leagues/${props.filename}.json`}>
      {(data) => {
        const league = data.find((l) => l.table_id === params.id);

        return (
          <div className="league-page">
            <div className="leagues-list">
              {data.map((l) => (
                <div
                  key={l.table_id}
                  className={l.table_id === league?.table_id ? 'selected' : ''}
                  onClick={() => navigate(`/${props.pageId}/${l.table_id}`)}
                >
                  {props.displayName} | {l.display_name}
                </div>
              ))}
            </div>
            <h1>
              {props.displayName}
              {league ? ` | ${league.display_name}` : ''}
            </h1>
            {league && <LeagueComponent league={league} />}
          </div>
        );
      }}
    </WithJsonData>
  );
};

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
    ((league.players[0]?.total_points ?? 0) > finalistPointsThreshold ||
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
            ...Array.from({ length: league.display_tiebreakers ? 3 : 0 }, () => '96px'),
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
          {league.display_tiebreakers ? (
            <>
              <div className="cell">aTGW</div>
              <div className="cell">aOMW</div>
              <div className="cell">aOGW</div>
            </>
          ) : null}
        </div>
        {league.players.slice(0).map((player, index) => {
          const points = [...player.points.entries()].filter((e): e is [index: number, value: number] => e[1] !== null);
          points.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
          let eventToImprove = points[5];
          for (let i = 4; i >= 0; i -= 1) {
            if (points[i]?.[1] === eventToImprove?.[1]) eventToImprove = points[i];
            else break;
          }
          const nonSignificantEventIndices = new Set(points.slice(6).map((e) => e[0]));
          const nameClass = !league.is_finished || index >= league.top ? '' : index === 0 ? 'red-highlight' : 'red';
          const finalist =
            player.total_points > finalistPointsThreshold ||
            (league.determined_top !== undefined && index + 1 <= league.determined_top);
          return (
            <div
              style={{ display: 'contents' }}
              key={player.id}
              className={[
                index + 1 === league.top ? 'last-top' : '',
                displayMaxPoints && player.max_points < minMaxPointsToMakeTop ? 'red-row' : '',
                finalist && !league.is_finished ? 'green-row' : '',
              ].join(' ')}
            >
              <div className={`cell ${nameClass}`}>{index + 1}</div>
              <div className={`cell ${nameClass}`}>{player.display_name}</div>
              <div className="cell">{player.event_count}</div>
              <div className={`cell total-points`}>{player.total_points}</div>
              {player.points.map((p, i) => {
                const nonSignificant = nonSignificantEventIndices.has(i);
                const toImprove = p !== 0 && i === eventToImprove?.[0];
                const className =
                  p >= 12 && !league.disable_4_0_extra_point
                    ? '_4-0'
                    : toImprove
                      ? 'to-improve'
                      : nonSignificant
                        ? 'non-significant'
                        : '';
                return (
                  <div className={`cell event-points ${className}`} key={i}>
                    {p ?? ''}
                  </div>
                );
              })}
              {displayMaxPoints && <div className="cell">{player.max_points}</div>}
              {league.display_tiebreakers ? (
                <>
                  <div className="cell">
                    {typeof player.avg_tgw === 'number' ? `${player.avg_tgw.toFixed(2)}%` : ''}
                  </div>
                  <div className="cell">
                    {typeof player.avg_omw === 'number' ? `${player.avg_omw.toFixed(2)}%` : ''}
                  </div>
                  <div className="cell">
                    {typeof player.avg_ogw === 'number' ? `${player.avg_ogw.toFixed(2)}%` : ''}
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
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

import { LeagueDto } from '@dtos';
import { WithJsonData } from '@frontend/components/WithJsonDataComponent';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';

export const LeaguesPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  return (
    <WithJsonData<LeagueDto[]> url={`${import.meta.env.BASE_URL}data/leagues.json`}>
      {(data) => {
        const league = data.find((l) => l.id === id);

        return (
          <div className="league-page">
            <h1>Leagues</h1>
            <div className="leagues-list">
              {data.map((l) => (
                <div
                  key={l.id}
                  className={l.id === league?.id ? 'selected' : ''}
                  onClick={() => navigate(`/leagues/${l.id}`)}
                >
                  {l.name}
                </div>
              ))}
            </div>
            {league && (
              <div className="league-details">
                <h1>{league.name}</h1>
                <div
                  className="grid-table"
                  style={{
                    gridTemplateColumns: [
                      '48px',
                      '256px',
                      '64px',
                      '64px',
                      ...Array.from({ length: league.total_events }, () => '48px'),
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
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  {league.players.slice(0).map((player, index) => (
                    <div
                      style={{ display: 'contents' }}
                      key={player.id}
                      className={`${index + 1 === league.top ? 'last-top' : ''}`}
                    >
                      <div className="cell">{index + 1}</div>
                      <div className="cell">{player.display_name}</div>
                      <div className="cell">{player.event_count}</div>
                      <div className="cell total-points">{player.total_points}</div>
                      {player.points.map((p, i) => (
                        <div className="cell" key={i}>
                          {p ?? ''}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      }}
    </WithJsonData>
  );
};

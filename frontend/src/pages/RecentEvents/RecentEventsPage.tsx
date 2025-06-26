import { useEffect, useState } from 'react';
import styles from './RecentEvents.module.scss';
import { ARCHETYPES, RecentTournamentsTableRow } from '@types';
import FormatComponent from 'src/components/Format/FormatComponent';
import DeckComponent from 'src/components/Deck/DeckComponent';

export default function RecentEventsPage() {
  const [data, setData] = useState<RecentTournamentsTableRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const timeoutId = setTimeout(() => setShowLoading(true), 500);
      try {
        const res = await fetch('/data/recent-tournaments.json', { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (error) {
        if (!(error instanceof Error)) throw error;
        if (error.name !== 'AbortError') setError(error.message);
      } finally {
        clearTimeout(timeoutId);
        setShowLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  let content;

  if (error) content = <p style={{ color: 'red' }}>Error: {error}</p>;
  else if (!data) {
    if (showLoading) content = <p>Loading...</p>;
    else content = null;
  } else if (data.length === 0) content = <p>No data</p>;
  else {
    content = (
      <table border={1} cellPadding={4} style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Format</th>
            <th>Players</th>
            <th>Winner</th>
            <th>Deck</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <th>{row.date}</th>
              <th>
                <FormatComponent value={row.format} />
              </th>
              <th>{row.players_count}</th>
              <th>{row.winner.player}</th>
              <th className="left">
                <DeckComponent deck={row.winner.deck} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <>
      <h1 className={styles.heading}># Recent Events</h1>
      {content}
    </>
  );
}

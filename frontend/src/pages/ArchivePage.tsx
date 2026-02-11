import { Link } from 'react-router-dom';

export const ArchivePage: React.FC = () => (
  <div className="archive-page">
    <h1>Archive</h1>
    <ul>
      <li>
        <Link to="/standard-ladder-2025">Standard Ladder 2025</Link>
      </li>
      <li>
        <Link to="/pioneer-ladder-2025">Pioneer Ladder 2025</Link>
      </li>
    </ul>
  </div>
);

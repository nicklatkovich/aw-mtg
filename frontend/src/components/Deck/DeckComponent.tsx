import { DeckDTO } from '@dtos';
import styles from './DeckComponent.module.scss';

import W from './images/W.png';
import U from './images/U.png';
import B from './images/B.png';
import R from './images/R.png';
import G from './images/G.png';
import c from './images/c.png';

const DeckComponent: React.FC<{
  deck?: DeckDTO | null;
  blackBorder?: boolean;
}> = ({ deck, blackBorder }) => {
  if (!deck) return null;
  return (
    <span>
      <img
        src={W}
        className={`${styles.img} ${deck.colors?.includes('W') ? styles.img__active : ''} ${blackBorder ? styles.img__black_border : ''}`}
      />
      <img
        src={U}
        className={`${styles.img} ${deck.colors?.includes('U') ? styles.img__active : ''} ${blackBorder ? styles.img__black_border : ''}`}
      />
      <img
        src={B}
        className={`${styles.img} ${deck.colors?.includes('B') ? styles.img__active : ''} ${blackBorder ? styles.img__black_border : ''}`}
      />
      <img
        src={R}
        className={`${styles.img} ${deck.colors?.includes('R') ? styles.img__active : ''} ${blackBorder ? styles.img__black_border : ''}`}
      />
      <img
        src={G}
        className={`${styles.img} ${deck.colors?.includes('G') ? styles.img__active : ''} ${blackBorder ? styles.img__black_border : ''}`}
      />
      <img
        src={c}
        className={`${styles.img} ${deck.colors?.includes('c') ? styles.img__active : ''} ${blackBorder ? styles.img__black_border : ''}`}
      />
      <span>{deck.archetype}</span>
    </span>
  );
};

export default DeckComponent;

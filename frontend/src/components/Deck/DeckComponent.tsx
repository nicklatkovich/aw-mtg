import W from './W.png';
import U from './U.png';
import B from './B.png';
import R from './R.png';
import G from './G.png';
import c from './c.png';
import styles from './DeckComponent.module.scss';
import { ArchetypeInfo, ARCHETYPES, DeckArchetype, DeckType } from '@types';

const DeckComponent: React.FC<{
  deck?: DeckArchetype | { archetype: DeckArchetype; colors?: string; type?: DeckType } | null;
}> = ({ deck }) => {
  if (!deck) return null;
  const archetype = typeof deck === 'string' ? deck : deck.archetype;
  const archetypeInfo: ArchetypeInfo = ARCHETYPES[archetype];
  const defaultArchetypeColor = typeof archetypeInfo === 'string' ? archetypeInfo : archetypeInfo[0];
  const colors = typeof deck === 'object' ? (deck.colors ?? defaultArchetypeColor) : defaultArchetypeColor;
  return (
    <span>
      <img src={W} className={`${styles.img} ${colors.includes('W') ? styles.img__active : ''}`} />
      <img src={U} className={`${styles.img} ${colors.includes('U') ? styles.img__active : ''}`} />
      <img src={B} className={`${styles.img} ${colors.includes('B') ? styles.img__active : ''}`} />
      <img src={R} className={`${styles.img} ${colors.includes('R') ? styles.img__active : ''}`} />
      <img src={G} className={`${styles.img} ${colors.includes('G') ? styles.img__active : ''}`} />
      <img src={c} className={`${styles.img} ${colors.includes('c') ? styles.img__active : ''}`} />
      <span>{archetype}</span>
    </span>
  );
};

export default DeckComponent;

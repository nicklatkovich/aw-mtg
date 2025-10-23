export default function ColorStatsComponent(props: {
  colorStats: Record<string, number>;
  scale?: number;
  className?: string;
}) {
  const barWidth = 32 * (props.scale ?? 1);
  const barHeight = 64 * (props.scale ?? 1);
  const borderSize = 2 * (props.scale ?? 1);
  const sortedColorStats = Object.entries(props.colorStats).sort(([ac, av], [bc, bv]) => {
    if (av !== bv) return bv - av;
    return 'WUBRG'.indexOf(ac) - 'WUBRG'.indexOf(bc);
  });
  return (
    <div className={props.className}>
      <div
        style={{
          margin: 32 * (props.scale ?? 1),
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'end',
          border: 'solid #babed8 0',
          borderBottomWidth: `${borderSize}px`,
          // backgroundColor: 'grey',
          width: barWidth * 5,
          height: barHeight,
        }}
      >
        {sortedColorStats.map(([c, v]) => (
          <div
            key={c}
            style={{
              width: '20%',
              height: v < 0.07 ? 0 : `${Math.round(v * 100)}%`,
              backgroundColor: {
                W: 'white',
                U: 'blue',
                B: 'black',
                R: 'red',
                G: 'green',
              }[c],
              boxShadow: `inset #babed8 0 0 0 ${borderSize}px, #babed8 0 0 16px ${borderSize}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

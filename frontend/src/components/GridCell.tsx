import React, { useEffect, useRef, useState } from 'react';

export const GridCell: React.FC<{ children: React.ReactNode; left?: boolean }> = ({ children, left }) => (
  <div className={`cell ${left ? 'left' : ''}`}>{children}</div>
);

export const TruncatableGridCell: React.FC<{
  children: React.ReactNode;
  left?: boolean;
  title?: string | null;
}> = ({ children, left, title }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  const checkTruncation = () => {
    const el = ref.current;
    if (!el) return;
    setIsTruncated(el.scrollWidth > el.clientWidth);
  };

  useEffect(() => {
    checkTruncation(); // initial check

    const observer = new ResizeObserver(checkTruncation);
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [children]);

  return (
    <div
      ref={ref}
      className={`cell ${left ? 'left' : ''} ${isTruncated ? 'is-truncated' : ''}`}
      title={isTruncated && title ? title : undefined}
    >
      {children}
    </div>
  );
};

import { Format } from '@dtos';

const FormatComponent: React.FC<{ value: Format; className?: string }> = ({ value, className }) => (
  <span className={`format--${value} ${className ?? ''}`}>{value.toUpperCase()}</span>
);

export default FormatComponent;

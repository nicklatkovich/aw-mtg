import { Format } from '@dtos';

const FormatComponent: React.FC<{ value: Format }> = ({ value }) => (
  <span className={`format--${value}`}>{value.toUpperCase()}</span>
);

export default FormatComponent;

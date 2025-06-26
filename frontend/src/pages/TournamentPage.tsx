import { useParams } from 'react-router-dom';
// import { WithJsonData } from 'src/components/WithJsonData/WithJsonDataComponent';

const TournamentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <h1># Tournament {id}</h1>
      {/* <WithJsonData></WithJsonData> */}
    </>
  );
};

export default TournamentPage;

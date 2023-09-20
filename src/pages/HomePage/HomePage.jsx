import { MainImg, Heading } from './HomePage.styled';
import { useClearState } from './useClearState';

const HomePage = () => {
  useClearState();
  return (
    <>
      <Heading>Rent cars with us</Heading>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MainImg />
      </div>
    </>
  );
};

export default HomePage;

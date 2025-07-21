import { Link } from 'expo-router';

import { Text } from '@/shared/ui';
import { HomeWrapper } from '@/shared/wrappers/HomeWrapper';

import styles from './styles';

const Home = () => {
  return (
    <HomeWrapper>
      <Link href="./main">
        <Text style={{ color: 'red' }}>Home</Text>
      </Link>
    </HomeWrapper>
  );
};

export default Home;

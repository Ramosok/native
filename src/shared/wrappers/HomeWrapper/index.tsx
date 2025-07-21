import { FC, PropsWithChildren } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';

import styles from '@/app/(public)/home/styles';
import { Colors } from '@/lib/theme/colors';
import homeImage from '@/shared/assets/images/home.webp';

export const HomeWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageBackground style={styles.background} source={homeImage} resizeMode="cover">
      <LinearGradient
        colors={Colors.gradientHome.colors}
        locations={[
          Colors.gradientHome.locations.start,
          Colors.gradientHome.locations.firstStop,
          Colors.gradientHome.locations.secondStop,
          Colors.gradientHome.locations.end,
        ]}
        style={styles.gradient}>
        {children}
      </LinearGradient>
    </ImageBackground>
  );
};

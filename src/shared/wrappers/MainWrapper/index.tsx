import { FC, PropsWithChildren } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';

import styles from '@/app/(public)/main/styles';
import { Colors } from '@/lib/theme/colors';
import mainImage from '@/shared/assets/images/main.webp';

export const MainWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageBackground style={styles.background} source={mainImage} resizeMode="cover">
      <LinearGradient
        colors={Colors.gradientMain.colors}
        locations={[
          Colors.gradientMain.locations.start,
          Colors.gradientMain.locations.firstStop,
          Colors.gradientMain.locations.secondStop,
          Colors.gradientMain.locations.end,
        ]}
        style={styles.gradient}>
        {children}
      </LinearGradient>
    </ImageBackground>
  );
};

import { FC, ReactNode, useEffect } from 'react';

import { View, StyleProp, type ViewStyle } from 'react-native';

import { useTimer } from '@/shared/components/CountDown/hooks/useTimer';
import { formatTime } from '@/shared/components/CountDown/utils/formatTime';

type CountDownChildrenProps = {
  secondsLeft: string;
  isComplete: boolean;
  resetTimer: () => void;
};

type CountDownProps = {
  styleContainer?: StyleProp<ViewStyle>;
  children: (props: CountDownChildrenProps) => ReactNode;
  countStorageKey: string;
};

export const CountDown: FC<CountDownProps> = ({ children, styleContainer, countStorageKey }) => {
  const { resetTimer, secondsLeft, initTimer } = useTimer(countStorageKey);

  useEffect(() => {
    if (countStorageKey) {
      initTimer();
    }
  }, []);

  return (
    <View style={styleContainer}>
      {children({
        secondsLeft: formatTime(secondsLeft),
        isComplete: secondsLeft === 0,
        resetTimer,
      })}
    </View>
  );
};

import { FC, PropsWithChildren } from 'react';

import { Text as RNText, TextProps } from 'react-native';

export const Text: FC<PropsWithChildren<TextProps>> = ({ style, children, ...props }) => {
  return (
    <RNText
      {...props}
      style={[
        style,
        {
          fontFamily: 'Inter',
        },
      ]}>
      {children}
    </RNText>
  );
};

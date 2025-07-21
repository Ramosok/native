import React, { FC, PropsWithChildren, useMemo } from 'react';

import { View, TouchableWithoutFeedback } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  DISMISS_THRESHOLD,
  DURATION,
  MAX_HEIGHT,
  MODAL_HEIGHT_RATIO,
  SNAP_BOTTOM,
} from './constants';
import { createModalStyles } from './styles';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ visible, onClose, children }) => {
  const styles = useMemo(() => createModalStyles(MAX_HEIGHT), []);
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(SNAP_BOTTOM);
  const SNAP_TOP_DYNAMIC = SNAP_BOTTOM * MODAL_HEIGHT_RATIO - MAX_HEIGHT + insets.top;

  useDerivedValue(() => {
    if (visible) {
      translateY.value = withTiming(SNAP_TOP_DYNAMIC, { duration: DURATION });
    } else {
      translateY.value = withTiming(SNAP_BOTTOM, { duration: DURATION });
    }
  }, [visible]);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      const newY = SNAP_TOP_DYNAMIC + event.translationY;
      translateY.value = Math.max(SNAP_TOP_DYNAMIC, Math.min(newY, SNAP_BOTTOM));
    })
    .onEnd((event) => {
      const shouldClose = event.translationY > MAX_HEIGHT * DISMISS_THRESHOLD;
      if (shouldClose) {
        runOnJS(onClose)();
      } else {
        translateY.value = withTiming(SNAP_TOP_DYNAMIC, { duration: DURATION });
      }
    });

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <TouchableWithoutFeedback onPress={() => runOnJS(onClose)()}>
        <Animated.View style={[styles.backdrop]} pointerEvents={visible ? 'auto' : 'none'} />
      </TouchableWithoutFeedback>

      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.sheetContainer, sheetStyle]}>
          <View style={styles.handleBar} />
          <View style={styles.sheetContent}>{children}</View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

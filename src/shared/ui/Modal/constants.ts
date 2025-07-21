import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const MODAL_HEIGHT_RATIO = 0.9;
export const DISMISS_THRESHOLD = 0.4;
export const MAX_HEIGHT = height * MODAL_HEIGHT_RATIO;
export const SNAP_BOTTOM = height;
export const DURATION = 300;

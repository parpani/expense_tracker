import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('Inter_18pt', '600'),
    //fontWeight: '400',
    color: '#36455A',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(15),
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 167, 167, 0.5)',
    color: '#36455A',
  },
});

export default style;
import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: horizontalScale(24),
    justifyContent:'center'
  },
  registrationButton: {
    alignItems: 'center',
  },
  error: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
});

export default style;
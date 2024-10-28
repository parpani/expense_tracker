import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, scaleFontSize} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: getFontFamily('Inter_18pt', '400'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#636776',
  },
  username: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  inputField:{
    marginTop:15
  },
  inputFieldLabel:{
    paddingVertical:horizontalScale(-5),
    marginVertical:verticalScale(15)
  },
  submitBtnContainer:{
    width:'25%', 
    alignSelf:'flex-end'
  },
  submitBtn:{
    height:40
  }
});

export default style;
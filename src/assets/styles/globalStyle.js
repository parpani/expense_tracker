import { StyleSheet } from "react-native";
import { verticalScale } from "./scaling";

export const primaryColor = '#03707a';
export const secondaryColor = '#13b3c2';
export const textColor = 'white';

const globalStyle = StyleSheet.create({
    backgroundWhite:{
        backgroundColor:'#ffffff'
    },
    flex:{
        flex:1,
    },
    marginBottom24:{
        marginBottom:verticalScale(24)
    },
    marginHorizontal:{
        marginHorizontal:30,
    },
    pageHeader: {
        marginHorizontal: horizontalScale(24),
        marginBottom: verticalScale(16),
        marginTop: verticalScale(6),
    },
})

export default globalStyle;
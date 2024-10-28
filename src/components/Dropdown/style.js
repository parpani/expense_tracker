import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { scaleFontSize } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    label: {
        fontFamily: getFontFamily('Inter_18pt', '600'),
        //fontWeight: '400',
        color: '#36455A',
        fontSize: scaleFontSize(14),
        lineHeight: scaleFontSize(15),
    },
})

export default style
import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
import { textColor } from "../../assets/styles/globalStyle";
import { windowWidth } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
      categoryTitle:{
        flex: 3, 
        padding: 10, 
        flexDirection: 'row',
        alignItems: 'center'
    },
      input: {
        color: textColor,
        borderBottomWidth: 1,
        width: windowWidth / 1.4,
        borderBottomColor: '#D3D3D3',
        fontSize: 17,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
    },
    color: {
        marginRight: 10,
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
    },
    iconsContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icons:{
        marginHorizontal:horizontalScale(10),
    },
    categories: {
        marginLeft: horizontalScale(24),
    },
    categoryItem: {
        marginRight: horizontalScale(10),
    },
})

export default style;
import { Dimensions, StyleSheet } from "react-native"


export const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    areaFeed: {
        marginVertical: 10,
        borderBottomWidth: 0.2, 
        shadowColor: "black",
        elevation: 1,
        padding: 5
    },
    viewPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    imgPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    nameUser: {
        fontSize: 22,
        textAlign: 'left',
        color: 'black',
        marginLeft: 12,
    },
    areaPubli: {
        alignItems: 'center',
    },
    imgPubli: {
        width: 360, // Definindo um tamanho fixo para a largura
        height: 320, // Definindo um tamanho fixo para a altura
        borderRadius: 8,
    },
    areaBtn:{
        flexDirection: 'row',
        padding: 5
    },
    btnSend:{
        paddingLeft: 10
    },
    iconLike:{
        width: 40,
        height: 35
    },    
    iconSend:{
        width: 33,
        height: 34
    },
    viewFooter:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameFooter:{
        fontSize: 15,
        paddingLeft: 10
    },
    descriptionFooter:{
        paddingLeft:5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    likes:{
        paddingLeft: 8,
        fontWeight: 'bold'
    }
});
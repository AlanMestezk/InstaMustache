import { StyleSheet } from "react-native"

export const Styles = StyleSheet.create(

    {   
        header:{
            height: 70,
            backgroundColor:'#fff',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 40,
            padding: 16,
            borderBottomWidth: 0.2, 
            shadowColor: "black",
            elevation: 2
        },
        logo:{
            width: 40,
            height: 40
        },
        logoText:{
            width: 250,
            height: 30
        },
        send:{
            width: 30,
            height: 30
        }
    }
)
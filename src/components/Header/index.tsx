import { View, Image, TouchableOpacity } from "react-native"
import { Styles }                        from "./Styles"


export const Header: React.FC = ()=>{

    return(

        <View style={Styles.header}>

            <TouchableOpacity>

                <Image
                    source={require('../../assets/InstaMustacheIcon (1).png')}
                    style={Styles.logo}
                />
            </TouchableOpacity>

            <TouchableOpacity>

                <Image
                    source={require('../../assets/InstaMustacheTextIcon.png')}
                    style={Styles.logoText}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                
                <Image
                    source={require('../../assets/SendMustache.png')}
                    style={Styles.send}
                />
            </TouchableOpacity>

        </View>

    )  
}
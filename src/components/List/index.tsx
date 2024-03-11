import { View, Text, Image, TouchableOpacity } from "react-native"
import { Styles }                              from "./Styles"
import { useState }                            from "react";



interface ListProps {
    data : string | any
}

export const List: React.FC<ListProps> = ({ data }) => {

    const [like,               setLike] = useState<boolean>(data.likeada)
    const [numberLikes, setNumberLikes] = useState<number>(data.likers)

    const handleShowLikes = (likers: number )=>{
        
       if(likers <= 0){
            return null;
       }

       const textLikes = likers >= 2 ? "curtidas" : "curtida"

       return (

            <Text style={Styles.likes}>
                
                {numberLikes} {textLikes}
            </Text>
       )
       
    }

    const handleLike = () => {

        const newLikeState = !like;
        const newNumberLikes = newLikeState ? numberLikes + 1 : numberLikes - 1;
        
        setLike(newLikeState);
        setNumberLikes(newNumberLikes);

    };

    return (
        <View style={Styles.areaFeed}>

            <View style={Styles.viewPerfil}>

                <Image 
                    source={{ uri: data.imagPerfil }} 
                    style={Styles.imgPerfil} 
                />

                <Text style={Styles.nameUser}>{data.name}</Text>

            </View>

            <View style={Styles.areaPubli}>

                <Image
                    source={{ uri: data.imgPubli }}
                    style={Styles.imgPubli}
                    resizeMode="cover"
                />

            </View>

            <View style={Styles.areaBtn}>

                <TouchableOpacity onPress={handleLike}>

                    <Image
                        source={
                            like ? 
                            require('../../assets/LikeMustache (1).png'):
                            require('../../assets/NotLikeMustache (1).png')
                            
                        }
                        style={Styles.iconLike}
                    />

                </TouchableOpacity>

                <TouchableOpacity style={Styles.btnSend}>

                    <Image
                        source={require('../../assets/SendMustache.png')}
                        style={Styles.iconSend}
                    />

                </TouchableOpacity>

            </View>

            {
                handleShowLikes(numberLikes)
            }

            <View style={Styles.viewFooter}>
                
                <Text style={Styles.nameFooter}>
                    {data.name}
                </Text>

                <Text style={Styles.descriptionFooter}> 
                    {data.description}
                </Text>

            </View>
        </View>
    );
};
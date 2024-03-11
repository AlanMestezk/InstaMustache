import { View, FlatList } from "react-native"
import { useState }       from "react"
import { List }           from "../List"

interface FeedProps{

    id          : string
    name        : string,
    description : string,
    imagPerfil  : string,
    imgPubli    : string,
    likeada     : boolean,
    likers      : number | any
}

export const Feed: React.FC = ()=>{

    const [feed, setFeed] = useState<FeedProps []>(

        [
            {
                id         : '1',
                name       : 'Alan_Golfinh00',
                description: 'Melhor que futebol brasileiro',
                imagPerfil : 'https://pbs.twimg.com/media/FOpg9uTXwBAjykb?format=jpg&name=small',
                imgPubli   : 'https://www.4oito.com.br/files/files/212(1).png',
                likeada    : false,
                likers     : 81
            },
            {
                id         : '2',
                name       : 'MateusJacaré n2',
                description: 'Holambraaaaa, te amo te amo S2 S2.',
                imagPerfil : 'https://scontent-gru1-2.xx.fbcdn.net/v/t1.18169-9/26165984_330779854077706_3639609761748347512_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EqEx-8pbG8UAX8GhL5U&_nc_ht=scontent-gru1-2.xx&oh=00_AfCafBFkBd_KfmrxEHOKmGcHqy2zsodhJdJAOCs7wsittg&oe=66129CB5',
                imgPubli   : 'https://static.wixstatic.com/media/06db6a_3bc85afdfc9346969ee6ef327ff4d7ef~mv2.jpg/v1/fill/w_520,h_405,al_c,q_80/HOLAMBRA-1.jpg',
                likeada    : true,
                likers     : 1
            },
            {
                id         : '3',
                name       : 'Dieego_Brown',
                description: 'Filme perfeito, sem mais!',
                imagPerfil : 'https://s2-g1.glbimg.com/KijX0QgEENLEh2xN2h6bEyRnt_4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/e/EYKMBXR72tNdkUAgmZzQ/azul-caneta.jpg',
                imgPubli   : 'https://media.fstatic.com/anKVquLuvYqmWQUGSut7p_vSG0c=/322x478/smart/filters:format(webp)/media/movies/covers/2019/04/AAAABQr629iFfXp0VdUiRJHrrW9zxwkY98MEaEEyaNFIQjhiajmOMS4EV33gibA3QE_WkUT69K.jpg',
                likeada    : false,
                likers     : 1
            },
            {
                id         : '4',
                name       : 'GaybrieL_Quality',
                description: 'Eu apoio esta ação!! :)',
                imagPerfil : 'https://i.pinimg.com/736x/86/03/d6/8603d68a7c2966859ee7b342c291c420.jpg',
                imgPubli   : 'https://contilnetnoticias.com.br/wp-content/uploads/2023/04/Auxilio-para-Maes-Solteiras-1-4.png',
                likeada    : false,
                likers     : 22
            },
            {
                id         : '5',
                name       : 'Thi-Jamelão',
                description: 'Identicos, só eu que percebi?',
                imagPerfil : 'https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/255347689_220158593554105_1263041072339937701_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6l5YrD89tCwAX9IpvlO&_nc_ht=scontent-gru2-1.xx&oh=00_AfB_LpVYEDIVQswwjt-LROfuLlLdR_cooyyBQbr9e0fqJQ&oe=65EF4297',
                imgPubli   : 'https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/123348930_161804592263845_529306730393406820_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WRDwIlYOi20AX9oAVYx&_nc_ht=scontent-gru1-2.xx&oh=00_AfAs1rWCSkjsb7qe5BYzOtFaj0ZMwRj6Zwe352Cyln6FxQ&oe=6612A0FF',
                likeada    : false,
                likers     : 231
            },
            {
                id         : '6',
                name       : 'Keno_Linho silva ',
                description: 'Eu vou lhe pegar Puquemon!!!',
                imagPerfil : 'https://pbs.twimg.com/profile_images/1441535639829233664/coPHY1QE_400x400.jpg',
                imgPubli   : 'https://www.goodvinil.pt/4664-large_default/pokemon-pikachu.jpg',
                likeada    : false,
                likers     : 92
            }
        ]
    )
    

    return(

        <FlatList
            data={feed}
            renderItem={({ item }) => <List data={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flexGrow: 1 }}
        />
    )
}
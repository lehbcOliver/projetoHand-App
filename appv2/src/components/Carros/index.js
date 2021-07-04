import React from 'react';
import {View, Image, Text} from 'react-native';
import {Button} from 'react-native-paper';
import Styles from './style';


const Carros = (props) => {
    return (
       <View style={Styles.container}>
           <View style={Styles.description}>
               <Text style={Styles.carName}>{props.title}</Text>
               <Image style={Styles.img} resizeMode='contain' source={props.ImageUri} />
           </View>
           <View style={Styles.list}>
                <Text style={Styles.item}>4 portas</Text>
                <Text style={Styles.item}>Ar-condicionado</Text>
                <Text style={Styles.item}>Vidro elétrico</Text>
                <Text style={Styles.item}>Dir. Hidráulica</Text>
                <Text style={Styles.item}>5 Pessoas</Text>
           </View>
           <View>
               <Text  style={Styles.txtValue}>R$ {props.value}</Text>
               <Button  style={Styles.button} color='#fff' onPress={props.routes}>+</Button>
           </View>
       </View>
    );
}

export default Carros;
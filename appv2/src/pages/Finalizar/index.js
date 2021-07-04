import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {Button} from 'react-native-paper';
import Styles from './style';
import Logo from '../../components/Logo';
import Carros from '../../components/Carros';

const Finalizar = ({route, navigation}) => {
    const user = route.params.user;
    const dataRetirada = route.params.dataretirada;
    const dataDevolucao = route.params.datadevolucao;
    const valorTotal = route.params.calc;

    const handleFinish = () => {
        navigation.navigate('Home');
    }
    useEffect(()=> {
        console.log('dataRetirada:', dataRetirada);
    },[])
    return (
       <View style={Styles.container}>
          <Image source={require('../../assets/Images/loginBack.png')} />
          <Logo />
          <View style={Styles.content}>
              <Text style={Styles.txtNome}> Parabéns {user}</Text>
              <Text style={Styles.txtReserva}>SUA RESERVA FOI FINALIZADA COM SUCESSO</Text>
              <Text style={Styles.txtDate}>{`Seu veiculo deverá ser retirado no dia ${dataRetirada}`}</Text>
              <Text style={Styles.txtDate}>{`E entregue em nossa loja no dia ${dataDevolucao}`}</Text>
              <Text style={Styles.txtValor}>O valor total de sua locação</Text>
              <Text style={Styles.txtValor1}>{`R$ ${valorTotal},00`}</Text>
              <Text style={Styles.txtAgencia}>Vá a uma agencia com seus documentos para finalizar a reserva.</Text>
              <Text style={Styles.txtCancela}>O não comparecimento, na data de retirada, implica no cancelamento da reserva</Text>
              <Text style={Styles.txtPreferencia}>Obrigado pela sua preferencia</Text>
          </View>
          <Button style={Styles.button} color='#fff' onPress={()=>handleFinish()}>Voltar a home</Button>
       </View>
    );
}

export default Finalizar;
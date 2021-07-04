import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//imports
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import Home from  './src/pages/Home';
import ListCar from './src/pages/ListCar';
import UpdateDados from './src/pages/UpdateDados';
import Reserva from './src/pages/Reserva';
import Finalizar from './src/pages/Finalizar';
import ListReservas from './src/pages/ListReservas';
import Store from '@react-native-async-storage/async-storage';

const Routes =  () => {
    const Stack = createStackNavigator();
   
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
           
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
                <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
                <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown:true, title: 'Faça seu cadastro'}} />
                <Stack.Screen name='Reservas' component={ListReservas} options={{headerShown: true, title: 'Suas reservas'}} />
                <Stack.Screen name='ListCar' component={ListCar} options={{headerShown:true, title: 'Faça sua reserva'}} />
                <Stack.Screen name='UpdateDados' component={UpdateDados} options={{headerShown:true, title: 'Atualizar dados'}} />
                <Stack.Screen name='Reserva' component={Reserva} options={{headerShown:true}} />
                <Stack.Screen name='Finalizar' component={Finalizar} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
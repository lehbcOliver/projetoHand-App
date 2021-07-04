import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import Routes from './Routes';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#06065c',
      background: '#ffff',
      placeholder: '#a1a1a1',
      text: '#000'
    }
  }
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
};



export default App;

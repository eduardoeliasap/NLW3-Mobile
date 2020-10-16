import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './componentes/Header';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanagesDetails';

import SelectMapPosition from './pages/CreateOrphanages/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanages/OrphanageData';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }} >
        <Screen 
          name="OrphanagesMap" 
          component={OrphanagesMap}           
        />
        <Screen 
          name="OrphanagesDetails" 
          component={OrphanagesDetails} 
          options= {{
            headerShown: true,
            header: () => <Header showCancel={false} title="Detalhes do orfanato"/>
          }}
        />

        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition} 
          options= {{
            headerShown: true,
            header: () => <Header showCancel={false} title="Selecione no mapa"/>
          }}
        />
        <Screen 
          name="OrphanageData" 
          component={OrphanageData} 
          options= {{
            headerShown: true,
            header: () => <Header title="Informe os dados"/>
          }}
        />

      </Navigator>
    </NavigationContainer>
  );
}
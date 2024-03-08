/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Pages/Home';
import Insurances from '../Pages/Insurances';
import News from '../Pages/News';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
            let iconName;

            switch (route.name) {
                case 'Home':
                    iconName = 'home';
                    break;
                case 'Notícias':
                    iconName = 'newspaper';
                    break;
                case 'Convênios':
                    iconName = 'business';
                    break;
            }

            if (!focused) {
                iconName = iconName + '-outline';
            }

            return <Icon name={iconName} color="black" size={24} />;
        },
        headerShown: false,
        tabBarStyle: { paddingTop: 2, paddingBottom: 2 }
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notícias" component={News} />
      <Tab.Screen name="Convênios" component={Insurances} />
    </Tab.Navigator>
  );
}
import { useFonts } from 'expo-font';
const loadFonts = () => {
  useFonts({
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf')
  });
}

export default loadFonts;
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import splash from './pages/splash'
import home from './pages/home'
import main from './pages/main'

const stack = createStackNavigator({

  splash: splash,
  home:home,
  main,main
},
  {
    initialRouteName: 'splash',
    headerMode: 'none'
  },
)

const App = createAppContainer(stack);
export default App;
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignUp from "../screens/Auth/SignUp";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import AuthHome from "../screens/Auth/AuthHome";

const AuthNavigation = createStackNavigator(
  {
    AuthHome,
    SignUp,
    Login,
    Confirm,
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(AuthNavigation);

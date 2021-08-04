/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import PropTypes from "prop-types";

import { MaterialIcons,
  Entypo,
  AntDesign,
  FontAwesome,
  Ionicons,
  SimpleLineIcons,
  FontAwesome5,MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
/**
 *
 * @param {boolean} focused
 * 
 */
 
 export default IconComponent = ({
  iconType,
  iconSize,
  iconName,
  iconColor,
  onPress,
  iconStyle,
}) => {
  const socialIconProps = {
    size: iconSize,
    name: iconName,
    color: iconColor,
    onPress,
    style: iconStyle,
  };

  switch (iconType) {
    case "MaterialIcons":
      return <MaterialIcons {...socialIconProps} />;
      break;

    case "AntDesign":
      return <AntDesign {...socialIconProps} />;
      break;

    case "Entypo":
      return <Entypo {...socialIconProps} />;
      break;

    case "FontAwesome":
      return <FontAwesome {...socialIconProps} />;
      break;

    case "Ionicons":
      return <Ionicons {...socialIconProps} />;
      break;

    case "MaterialCommunityIcons":
      return <MaterialCommunityIcons {...socialIconProps} />;
      break;

    case "SimpleLineIcons":
      return <SimpleLineIcons {...socialIconProps} />;
      break;

    case "FontAwesome5":
      return <FontAwesome5 {...socialIconProps} />;
      break;

    case "SimpleLineIcons":
      return <SimpleLineIcons {...socialIconProps} />;
      break;

    default:
      return "Icon non definit";
      break;
  }
};

IconComponent.propTypes = {
  focused: PropTypes.bool,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
};
IconComponent.defaultProps = {
  focused: false,
  iconColor: "grey",
  iconSize: 32,
  onPress: null,
  iconStyle: null,
};

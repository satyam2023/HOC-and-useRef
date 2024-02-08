import React, { ComponentType } from 'react';
import { Text } from 'react-native';
import HomeScreen from '../HomeScreen/HomeScreen';
import SignUp from '../SignUp/SignUp';
import { useSelector } from 'react-redux';

interface HocProps {
 
}

function withHoc<P extends object>(SignUp: ComponentType<P>,HomeScreen: ComponentType<P>): React.FC<P & HocProps> 
{
  const Hoc: React.FC<P & HocProps> = (props) => {
    const token=useSelector((state:any)=>state.user.token);
    console.log("Token:::",token);
   
    return token?<HomeScreen {...props} />:<SignUp {...props}/>;
  };
  return Hoc;
}




const EnhancedComponent = withHoc(SignUp,HomeScreen);
export default EnhancedComponent;

import React from 'react';
import { AddSkillButton, AddSkillButtonText } from './styles';

import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}


const Button = ({ onPress, title, ...rest }: ButtonProps) => {
  return (
    <AddSkillButton onPress={onPress} {...rest}>
        <AddSkillButtonText>{title}</AddSkillButtonText> 
   </AddSkillButton>
  );
}

export default Button;
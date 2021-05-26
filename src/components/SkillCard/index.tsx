import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SkillItem, SkillItemText } from './styles';

// import { Container } from './styles';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

const SkillCard = ({ skill, ...rest }: SkillCardProps) => {
  return (
    <SkillItem {...rest}>
        <SkillItemText>
            {skill}
        </SkillItemText>
    </SkillItem>
  );
}

export default SkillCard;
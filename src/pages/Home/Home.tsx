import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import SkillCard from '../../components/SkillCard';

import { FlatList, Text } from 'react-native'

import { 
  Container, 
  WelcomeText, 
  Input, 
  SkillsHeaderTitle,
} from './styles';

interface SkillsProps {
  id: string;
  name: string;
}

const Home: React.FC = () => {

  const [newSkill, setNewSkill] = useState<string>('');
  const [skills, setSkills] = useState<SkillsProps[]>([]);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night');
    }
  }, [skills])

  function handleAddNewSkill() {
    const data = {
      id: new Date().getTime().toString(),
      name: newSkill
    }

    setSkills([...skills, data]);
  }

  function handleRemoveSkill(id: string) {
    setSkills(oldState => {
      return oldState.filter(skill => skill.id !== id)
    })

  }

  return (
    <Container>
      <WelcomeText>Welcome, Henrique</WelcomeText>
      <Text style={{color: 'white'}}>{greeting}</Text>
      <Input
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button title="Add" onPress={handleAddNewSkill}/>
      
      <SkillsHeaderTitle>MySkills</SkillsHeaderTitle>
      
      <FlatList 
        showsVerticalScrollIndicator={false} 
        data={skills} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
        <SkillCard 
          skill={item.name} 
          onPress={() => handleRemoveSkill(item.id)}
        />
      )}/>
        


    </Container>
  );
}

export default Home;
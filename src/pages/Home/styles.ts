import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #121015;
    padding: 70px 30px;

`

export const WelcomeText = styled.Text`

    color: white;
    font-size: 24px;
    font-weight: bold;

`

export const Input = styled.TextInput`
    margin-top: 30px;
    background-color: #1f1e25;
    color: #FFF;
    font-size: 18px;
    padding: ${Platform.OS === 'ios' ? '15px' : '10px'};
    border-radius: 7px;

`

export const SkillsHeaderTitle = styled.Text`
    margin: 50px 0px;;
    color: white;
    font-size: 24px;
    font-weight: bold;

`
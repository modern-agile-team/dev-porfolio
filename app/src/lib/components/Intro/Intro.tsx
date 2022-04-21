import React from 'react';
import styled from 'styled-components';
import { IntroTitle, IntroForm } from './index';

const Intro = ({ introOption = IntroOptionDefault }) => {
  return (
    <Wrap>
      <IntroTitle introOption={introOption} />
      <IntroForm introDes={introOption} />
    </Wrap>
  );
};

export default Intro;

const Wrap = styled.div<{
  textAlign?: string;
  introBackgroundColor?: string;
}>`
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 10px;
  white-space: pre-wrap; //줄바꿈 인식
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  background-color: ${({ introBackgroundColor }) => introBackgroundColor ?? 'whitesmoke'};
`;

const IntroOptionDefault = {
  title: 'Intro',
  shortIntro: 'shortIntro that will captivate people',
  description:
    'This props name is description.\nPlease write down your brief introduction here.\nIf you want to change the line, type backslash-n between the letters.\nAlso you want to move the letters to the center, change textAlign to center.\n\nSpread your dreams!',
};

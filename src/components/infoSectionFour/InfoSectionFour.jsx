import React from 'react';
import { Container } from '../infoSectionTwo/InfoSectionTwo';
import bgImage from '../../images/bake.jpg';
import styled from 'styled-components';

const Card = styled.div`
  width: 250px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Number = styled.div`
  font-weight: bold;
  font-size: 50px;
  color: ${(props) => props.theme.colors.text};
`;

const Subtitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

const InfoSectionFour = () => {
  return (
    <Container sectionImageTwo={bgImage} Height={'300px'}>
      <Card>
        <CardContent>
          <Number>1M+</Number>
          <Subtitle>Subscribers</Subtitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Number>80K+</Number>
          <Subtitle>5 Star Rating</Subtitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Number>1000+</Number>
          <Subtitle>Completed Projects</Subtitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Number>1000+</Number>
          <Subtitle>Likes</Subtitle>
        </CardContent>
      </Card>
    </Container>
  );
};

export default InfoSectionFour;

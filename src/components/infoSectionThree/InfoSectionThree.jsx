import React from 'react';
import SectionThreeImg from '../../images/team.png';
import {
  Container,
  Wrapper,
  Right,
  Image,
  Left,
  Title,
  Header,
  Description,
  List,
  ListItem,
} from '../styles/styled.Section';

const InfoSectionThree = () => {
  return (
    <Container>
      <Wrapper direction={'row-reverse'}>
        <Right>
          <Image src={SectionThreeImg} />
        </Right>
        <Left>
          <Title>Why you should trust us?</Title>
          <Header>Software Development Life Cycle Management (SDLC)</Header>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the, when an unknown printer took a galley of type and
            scrambled it to
          </Description>
          <List>
            <ListItem>UX</ListItem>
            <ListItem>UI Design</ListItem>
            <ListItem>Web</ListItem>
            <ListItem>Mobile</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionThree;

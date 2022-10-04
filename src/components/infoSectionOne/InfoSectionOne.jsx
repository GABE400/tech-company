import React from 'react';
import SecondImg from '../../images/2.png';
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

const InfoSectionOne = () => {
  return (
    <Container>
      <Wrapper direction={'row'}>
        <Right>
          <Image src={SecondImg} />
        </Right>
        <Left>
          <Title>Why you should choose us?</Title>
          <Header>
            We have standard business practices to build a software application
          </Header>
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

export default InfoSectionOne;

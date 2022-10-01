import React from 'react';
import styled from 'styled-components';
import heroImage from '../../images/hero.png';

const Container = styled.div`
  display: flex;
  height: 90%;
`;

const Left = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: #128182;
  text-align: center;
`;

const Description = styled.p`
  width: 70%;
  font-size: 20px;
  color: gray;
`;

const Right = styled.div`
  width: 40%;
  background-color: white;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-weight: bold;
  color: white;
  background-color: #2c729b;
  padding: 15px 30px;
  margin: 5px;
  cursor: pointer;
  border: 2px solid #2c729b;
  border-radius: 12px;
  background: linear-gradient(to right, aliceblue 50%, #2c729b 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: #2c729b;
    border: 2px solid #128182;
    background-position: left bottom;
    cursor: pointer;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Left>
        <Title>New Evaluation in the Leading Development of Technology!</Title>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Description>
        <ButtonsContainer>
          <Button>Get Started!</Button>
          <Button>Get in Touch</Button>
        </ButtonsContainer>
      </Left>
      <Right>
        <Image src={heroImage} />
      </Right>
    </Container>
  );
};

export default Hero;

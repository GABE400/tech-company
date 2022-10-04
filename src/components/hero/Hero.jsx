import React from 'react';
import styled from 'styled-components';
import heroImage from '../../images/hero.png';

const Container = styled.div`
  display: flex;
  height: 90%;

  @media only screen and (max-width: 600px) {
    height: 60%;
  }

  @media only screen and (min-width: 600px) {
    height: 50%;
  }

  @media only screen and (min-width: 992px) {
    height: 80%;
  }
`;

const Left = styled.div`
  width: 60%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 600px) {
    width: 50%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;

const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 30px;
  }

  @media only screen and (min-width: 600px) {
    width: 85%;
    font-size: 30px;
  }

  @media only screen and (min-width: 992px) {
    width: 85%;
  }
`;

const Description = styled.p`
  width: 70%;
  font-size: 20px;
  margin-bottom: 2%;
  color: ${(props) => props.theme.colors.textDark};

  @media only screen and (max-width: 600px) {
    width: 80%;
    text-align: center;
  }

  @media only screen and (min-width: 600px) {
    width: 70%;
  }

  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`;

const Right = styled.div`
  width: 40%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 500px;
  @media only screen and (min-width: 600px) {
    width: 400px;
  }

  @media only screen and (min-width: 992px) {
    width: 500px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-weight: bold;
  color: ${(props) => props.theme.colors.bgText};
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 15px 30px;
  margin: 5px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 12px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgLight} 50%,
    ${(props) => props.theme.colors.secondary} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-position: left bottom;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    padding: 10px 25px;
  }

  @media only screen and (min-width: 600px) {
    padding: 10px 30px;
  }

  @media only screen and (min-width: 992px) {
    padding: 15px 30px;
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
          since the 1500
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

import React from 'react';
import styled from 'styled-components';
import sectionImage1 from '../../images/back.jpg';

export const Container = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: ${({ Height }) => Height};
  background-image: url(${({ sectionImageTwo }) => sectionImageTwo});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  //for mobiles
  @media only screen and (max-width: 600px) {
    background-size: 100% 100%;
    height: 40%;
  }

  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    background-size: 100% 100%;
    height: 40%;
  }

  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    background-size: cover;
    height: 40%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding: 2%;
`;

const Description = styled.p`
  color: white;
  width: 40%;
  font-weight: lighter;
  font-size: 25px;
  //for mobiles
  @media only screen and (max-width: 600px) {
    width: 90%;
    font-size: 20px;
    text-align: center;
  }

  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 80%;
    text-align: center;
  }

  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 40%;
    text-align: center;
  }
`;

const InfoSectionTwo = () => {
  return (
    <Container sectionImageTwo={sectionImage1}>
      <TextWrapper>
        <Title>Neld Tech</Title>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys
        </Description>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys
        </Description>
      </TextWrapper>
    </Container>
  );
};

export default InfoSectionTwo;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  margin-top: 5%;
  height: 40%;
  //for mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 50%;
  }

  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    height: 20%;
  }

  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    height: 30%;
  }
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 2%;
`;

const Description = styled.div`
  color: #e9e4f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  width: 30%;

  //for mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding: 2%;
  }

  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 40%;
    font-size: 18px;
    text-align: center;
  }

  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 30%;
    font-size: 20px;
    text-align: center;
  }
`;

const MenuItem = styled.li`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.textDark};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.bgText};
  }
`;

const MenuContainer = styled.div`
  display: flex;
  list-style: none;
  flex-direction: column;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background-color: #bdc3c7;
  color: white;
  font-size: 20px;
  background-color: black;
`;
const Footer = () => {
  return (
    <>
      <Container>
        <Description>
          <Title>About Us</Title>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Description>
        <MenuContainer>
          <Title>Services</Title>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Contact</MenuItem>
          <MenuItem>Blog</MenuItem>
        </MenuContainer>
        <MenuContainer>
          <Title>Our Policies</Title>
          <MenuItem href='#'>Privacy Policy</MenuItem>
          <MenuItem href='#'>Data Policy</MenuItem>
        </MenuContainer>
      </Container>
      <CopyRight>&copy; 2022 NeldTech - All Rights Reserved.</CopyRight>
    </>
  );
};

export default Footer;

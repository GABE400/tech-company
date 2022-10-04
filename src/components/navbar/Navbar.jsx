import React from 'react';
import styled from 'styled-components';
import LogoPNG from '../../images/Logo.png';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 10%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  justify-content: space-between;
  align-items: center;

  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 8%;
  }

  //for Tablets and Medium Screens
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 5%;
  }

  //for laptops and desktops
  @media only screen and (max-width: 992px) {
    width: 100%;
    height: 10%;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;
`;
const Center = styled.div`
  display: flex;
  flex: 2;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    display: none;
  }

  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    display: flex;
  }

  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 150px;
  cursor: pointer;
  font-size: 20px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;
const MenuItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.textDark};
  }

  @media only screen and (min-width: 600px) {
    font-size: 15px;
    margin-right: 15px;
  }

  @media only screen and (min-width: 992px) {
    margin-right: 30px;
    font-size: 20px;
  }
`;

const Button = styled.button`
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 2px solid ${(props) => props.theme.colors.bgDefault};
  cursor: pointer;
  color: ${(props) => props.theme.colors.bgText};
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: ${(props) => props.theme.colors.bgDefault};
    color: ${(props) => props.theme.colors.secondary};
    border: 2px solid ${(props) => props.theme.colors.secondary};
  }

  @media only screen and (min-width: 600px) {
    padding: 8px 15px;
  }

  @media only screen and (min-width: 992px) {
    padding: 10px 20px;
  }
`;

const DarkMode = styled.div`
  clip-path: circle(50% at 50% 50%);
  background-color: ${(props) => props.theme.colors.bigSun};
  height: 30px;
  width: 30px;
  border-radius: 100%;
  cursor: pointer;
`;

const Navbar = ({ mode, setMode }) => {
  return (
    <Container>
      <Left>
        <Logo src={LogoPNG} />
      </Left>
      <Center>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Contact</MenuItem>
          <MenuItem>Blog</MenuItem>
        </Menu>
      </Center>
      <Right>
        <Button>let tech Lead!</Button>
        <DarkMode onClick={() => setMode(!mode)} />
      </Right>
    </Container>
  );
};

export default Navbar;

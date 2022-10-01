import React from 'react';
import styled from 'styled-components';
import LogoPNG from '../../images/Logo.png';

const Container = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: #128182;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const Button = styled.button`
  font-weight: bold;
  background-color: #29709a;
  border: 2px solid white;
  cursor: pointer;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: white;
    color: #29709a;
    border: 2px solid #29709a;
  }
`;

const Navbar = () => {
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
      </Right>
    </Container>
  );
};

export default Navbar;

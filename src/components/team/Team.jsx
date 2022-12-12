import React from 'react';
import styled from 'styled-components';
//import ImageOne from '../../images/team/2.jpg';
//import ImageTwo from '../../images/team/3.jpg';
//import ImageThree from '../../images/team/5.png';
import TeamImg from '../../images/team/user.png';
import TextBanner from '../textBanner/TextBanner';

const Container = styled.div`
  padding: 5%;
  background-color: ${(props) => props.theme.colors.bgDefault};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TeamCard = styled.div`
  height: 350px;
  width: 280px;
  display: flex;
  margin: 1%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberName = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

const TeamPosition = styled.div`
  color: ${(props) => props.theme.colors.textDark};
`;

const Team = () => {
  return (
    <Container>
      <TextBanner title={'We are a team'} subtitle={'Our Team'} />
      <Wrapper>
        <TeamCard>
          <CardImage src={TeamImg} />
          <TextWrapper>
            <MemberName>User Name</MemberName>
            <TeamPosition>Fullstack Developer</TeamPosition>
          </TextWrapper>
        </TeamCard>
        <TeamCard>
          <CardImage src={TeamImg} />
          <TextWrapper>
            <MemberName>User Name</MemberName>
            <TeamPosition>UX/UI Designer</TeamPosition>
          </TextWrapper>
        </TeamCard>
        <TeamCard>
          <CardImage src={TeamImg} />
          <TextWrapper>
            <MemberName>User Name</MemberName>
            <TeamPosition>Designer</TeamPosition>
          </TextWrapper>
        </TeamCard>
      </Wrapper>
    </Container>
  );
};

export default Team;

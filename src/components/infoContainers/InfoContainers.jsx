import React from 'react';
import styled from 'styled-components';
import {
  Card,
  CardContent,
  CardTitle,
  Description,
  Button,
} from '../styles/styles.Card';
import TextBanner from '../textBanner/TextBanner';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.bgDefault};
`;

const InfoContainers = () => {
  return (
    <div>
      <TextBanner title={'What we do'} subtitle={'Our Services'} />
      <Container>
        <Card>
          <CardContent padding={'5%'}>
            <CardTitle>UI/UX Design</CardTitle>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'5%'}>
            <CardTitle>Web Design</CardTitle>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'5%'}>
            <CardTitle>Graphic Design</CardTitle>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'5%'}>
            <CardTitle>Logo Design</CardTitle>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'5%'}>
            <CardTitle>Web App Development</CardTitle>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'5%'}>
            <CardTitle>Mobile App Development</CardTitle>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Description>
            <Button>Read More...</Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default InfoContainers;

import React from 'react';
import styled from 'styled-components';
import bgDeveloper from '../../images/software.jpg';
import bgD from '../../images/y1.jpg';
import bgE from '../../images/e1.jpg';
import bgF from '../../images/e2.jpg';
import {
  Button,
  Card,
  CardContent,
  CardImage,
  CardTitle,
  Description,
} from '../styles/styles.Card';
import TextBanner from '../textBanner/TextBanner';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Blogs = () => {
  return (
    <>
      <TextBanner title={'Our Blogs'} subtitle={'Recent News'} />
      <Container>
        <Card>
          <CardContent padding={'0.5%'}>
            <CardImage src={bgDeveloper} />
            <CardTitle>Title</CardTitle>
            <Description>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </Description>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'0.5%'}>
            <CardImage src={bgD} />
            <CardTitle>Title</CardTitle>
            <Description>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </Description>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'0.5%'}>
            <CardImage src={bgE} />
            <CardTitle>Title</CardTitle>
            <Description>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </Description>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'0.5%'}>
            <CardImage src={bgF} />
            <CardTitle>Title</CardTitle>
            <Description>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </Description>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'0.5%'}>
            <CardImage src={bgDeveloper} />
            <CardTitle>Title</CardTitle>
            <Description>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </Description>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent padding={'0.5%'}>
            <CardImage src={bgDeveloper} />
            <CardTitle>Title</CardTitle>
            <Description>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English.
            </Description>
            <Button>Read more..</Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Blogs;

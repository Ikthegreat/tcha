import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import trimgdummy1 from "src/shared/img/trimgdummy1.png";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 25rem;
  /* max-height:50rem; */
  background-color: ${({ theme }) => theme.color.light};
  padding: 2%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 767px) {
    min-height: 10rem;
    border-radius: 7px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

const ContainerTitle = styled.h4`
  margin: 1% 3% 3% 2% !important;
  font-size: 2.3rem;
  @media (max-width: 767px) {
    margin: 3% 2.5% !important;
    font-size: 1.2rem !important;
  }
`;
const SliderWrapper = styled.div`
  display: flex;
  /* max-width:70rem; */
  /* min-height:25rem; */
  max-width: 100rem;
  width: 100%;
  max-height: 30rem;
  /* height:100%; */
  overflow: hidden;
  background-color: pink;
`;

const StyledSlider = styled(Slider)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  min-height: 80%;
  /* flex-wrap: wrap; */
  overflow: auto;
  overflow-y: visible;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: grey; */
  @media (max-width: 1730px) {
    flex-wrap: nowrap;
    /* justify-content: start; */
    overflow-x: auto;
    overflow-y: visible;
  }
  /* @media (max-width: 767px) {
    flex-wrap:nowrap;
    justify-content: start;
    overflow-x:auto;
    overflow-y:visible;
  } */
`;

const StyledCard = styled(Card)`
  //카드 전체
  /* width: 18rem; */
  width:15vw;
  margin: 1rem 0.4rem 1.6rem 0.4rem;
  border-radius: 10px !important;
  /* background-color: rgba(0, 0, 0, 0.8) !important; */
  transition: transform 1s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 767px) {
    width: 20vw;
    margin: 0.4rem 0.4rem 0.8rem 0.4rem;
    max-height: 15rem;
    border-radius: 7px !important;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  //Card에 들어가는 사진
  display: flex !important;
  aspect-ratio: 1/1;
  object-fit: cover;
  /* height:15rem; */
  /* @media (max-width: 767px) {
    height: 100px;
  } */
`;

const StyledCardContent = styled(CardContent)`
  //카드 콘텐츠(트레이너이름, 별점)
  padding: 0% !important;
  @media (max-width: 767px) {
  }
`;

const CardTitleText = styled.h5`
  margin: 1.1rem 1rem;
  color: ${({ theme }) => theme.color.primary};
  @media (max-width: 767px) {
    margin: 0.3rem 0.5rem;
    font-size: 0.8rem;
  }
`;
const CardContentText = styled.h6`
  margin: 1.1rem 1rem;
  color: ${({ theme }) => theme.color.primary};
  @media (max-width: 767px) {
    margin: 0.3rem 0.5rem;
    font-size: 0.4rem;
  }
`;

interface TrainerInfoInterface {
  name: string;
}

function TrainerCard(prop: TrainerInfoInterface) {
  return (
    <StyledCard>
      <StyledCardMedia image={trimgdummy1} title="green iguana" />
      <StyledCardContent>
        <CardTitleText>{prop.name}</CardTitleText>
        <CardContentText>★ 4.5</CardContentText>
      </StyledCardContent>
    </StyledCard>
  );
}

function RecommendTrainer() {
  const TrainerInfo = [
    {
      name: "임병국1",
    },
    {
      name: "임병국2",
    },
    {
      name: "임병국3",
    },
    {
      name: "임병국4",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <ContainerTitle>MD 추천 트레이너</ContainerTitle>
        <CardWrapper>
          {TrainerInfo.map((info, index) => (
            <div key={index}>
              <TrainerCard name={info.name}></TrainerCard>
            </div>
          ))}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
}

export default RecommendTrainer;

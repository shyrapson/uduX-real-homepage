import React, {  useEffect }  from "react";
import { ArtistCard, ArtistCards } from "../../lib/data";
import styled from "styled-components";
import {gsap} from "gsap";

import Hero from "../../assets/images/udux_hero.png";
import Omahlay from "../../assets/images/omahlay.png";
import { LogoIcon } from "../../components/icons/LogoIcon";
import Navbar from "../../components/navbar/navbar";
import User from "../../components/sidebar/User";
const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: #000000;
  overflow-x: hidden;
`;

const Jumbotron = styled.div`
  min-width: 100%;
  position: relative;
  background-image: url(${Hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  height: 215px;
  margin-bottom: 20px;
  @media screen and (max-width:765px){
     
    margin-left: -500px;
    height: 159px;
    }
 
`;

const Tag = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
  @media screen and (max-width:765px){
        display: none;
    }
`;
const Logo =styled.svg`
   @media screen and (max-width:765px){
        display: none;
    }
`
const NavbarTop = styled.div`
display:none;
@media screen and (max-width:765px){
        display: flex;
    }

`
const Body = styled.div`
  padding: 20px;
  width: 100%;
  & h2 {
    color: #d9d9d9;
    font-size: 28px;
    font-weight: 700;
    text-indent: 20px;
    margin: 20px auto;
  }
`;

const Cards = styled.div`
  width: 100%;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;

`;

const Card = styled.div`
  width: 226px;
  min-width: 200px;
  border: 1px solid #707070;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 10px;
  height: 285px;
  cursor: pointer;
`;

const CardImageLayout = styled.div`
  padding: 10px;
  padding-top: 3px;
  position: relative;
  top: -15px;
  width: 185px;
  border: 1px solid #707070;
  background-color: #000000;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardContent = styled.div`
  background: ${(props: any) => props.$bgColor};
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  padding: 10px;
  & h3 {
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 10px;
  }
  & p {
    font-size: 10px;
    font-weight: 500;
    color: #d9d9d9;
    letter-spacing: 0.04em;
  }
`;

const CardBody = styled.div`
  background: ${(props: any) => props.bgColor};
  position: absolute;
  top: 30px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Home = () => {
      useEffect(() => {      
        gsap.fromTo('.ball',{opacity:0,x: -100  }, {opacity: 1 , x:0 , duration: 3 });

    }, []);
    

  return (
    <HomeContainer>
      <NavbarTop> <User display={true}/></NavbarTop>
     
      <Navbar />
      <Jumbotron>
        <Logo><LogoIcon /></Logo>
        
        <Tag src={Omahlay} alt="Omah Lay" />
      </Jumbotron>
      <Body>
        <h2>Welcome Back!</h2>
        <Cards >
          {ArtistCard.map(
            ({ image, title, content, contentBgColor, layoutColor }, index) => (
              <Card key={index} className="ball">
                <CardBody bgColor={layoutColor} >
                  <CardImageLayout >
                    <CardImage src={image} alt="title" />
                  </CardImageLayout>
                </CardBody>
                <CardContent $bgColor={contentBgColor}>
                  <h3>{title}</h3>
                  <p>{content}</p>
                </CardContent>
              </Card>
            )
          )}
        </Cards>
        <h2>Cheers to the Weekend</h2>
        <Cards>
          {ArtistCards.map(
            ({ image, title, content, contentBgColor, layoutColor }, index) => (
              <Card key={index} className="ball">
                <CardBody bgColor={layoutColor}>
                  <CardImageLayout>
                    <CardImage src={image} alt="title" />
                  </CardImageLayout>
                </CardBody>
                <CardContent $bgColor={contentBgColor}>
                  <h3>{title}</h3>
                  <p>{content}</p>
                </CardContent>
              </Card>
            )
          )}
        </Cards>
      </Body>
    </HomeContainer>
  );
};

export default Home;

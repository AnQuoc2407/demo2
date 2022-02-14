import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url('/bg.png');
  background-repeat: repeat-y;
  background-size: cover;
`

const BoxContainer = styled.div`
  margin: 60px auto 0 auto;
  width: 539px;
  min-height: 741px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 200%;
  height: 200%;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60eg);
  top: -480px;
  right: -60px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
display: flex;
position: absolute;
top: 60px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 55px;
line-height: 82px;
/* identical to box height */


color: #000000;
`;

const SmallText = styled.h5`
display: flex;
position: absolute;
width: 214px;
height: 30px;
top: 50px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
/* identical to box height */


color: #000000;

`;

const InnerContainer = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  margin-top: 100px;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1500px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const ImageLogo  = styled.div`
width: 200px;
height: 200px;
background: url('/logo.png');
background-size: cover;
margin-bottom: -140px;
margin-left: 110px;
`;
export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    
    <AccountContext.Provider value={contextValue}>
      <Container>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <ImageLogo/>
              <SmallText>Welcome to Quiz App</SmallText>
              <HeaderText>Sign in</HeaderText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <ImageLogo/>
              <SmallText>Welcome to Quiz App</SmallText>
              <HeaderText>Sign up</HeaderText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
      </Container>
    </AccountContext.Provider>
    
  );
}

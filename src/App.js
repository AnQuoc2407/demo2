import { Routes, Route} from 'react-router-dom'
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import QuizBox from "./components/quizBox/App";
import ColorBox from "./components/pages";
import Sidebar from './components/sideBar/sidebar';
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AppMainContainer = styled.div`
  width: 1440px;
  height: 1024px;
  
`;

const LeftContainer = styled.div`
  width: 360px;
  height: 100%;
  float: left;
`;

const RightContainer = styled.div`
  width: 1080px;
  height: 700px;
  float: right;
  background: #FFFFFF;
box-shadow: 0px 15px 40px 5px #EDEDED;
border-radius: 30px;
`;



function App() {
  return (
    <Routes>

   <Route path="/" element={
    <AppContainer>
      <AccountBox />
    </AppContainer>} />
    <Route path="/quiz" element={<QuizBox textColor="red"/>}/>
    <Route path="/test" element={<ColorBox/>}/>
    <Route path="/main" element={
      <AppMainContainer>
        <LeftContainer>
          <Sidebar/> 
        </LeftContainer>
        <RightContainer>
          <QuizBox />
        </RightContainer>
    
    </AppMainContainer>}/>
    </Routes>
     
   
  );
}

export default App;

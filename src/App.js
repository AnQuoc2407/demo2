import { Routes, Route} from 'react-router-dom'
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import QuizBox from "./components/quizBox/App";
import ColorBox from "./components/pages";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Routes>

   <Route path="/" element={
    <AppContainer>
      <AccountBox />
    </AppContainer>} />
    <Route path="/quiz" element={<QuizBox/>}/>
    <Route path="/main" element={<ColorBox/>}/>
    </Routes>
     
   
  );
}

export default App;

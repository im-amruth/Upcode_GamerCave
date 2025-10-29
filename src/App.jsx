import { Route, Routes } from "react-router-dom";
import Docs from "./pages/Docs";
import Layout from "./components/Layout";
import Games from "./pages/Games";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import EmojiGame from "./games/EmojiGame";
import LogoGuess from "./games/LogoGuess";
import CelebrityGuess from "./games/CelebrityGuess";
import MemoryGame from "./games/MemoryGame";
import Workshop from "./pages/Workshop";
import WebKoans from "./workshop/WebKoans";
import KoanPage from "./pages/KoansPage";
import CheatsheetApp from "./pages/Cheatsheet";
import CodeBreakerGame from "./games/CodeBreaker";
import TypingRacerGame from "./games/TypingRace";
import Quiz from "./games/Quiz";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Docs />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/games" element={<Layout><Games /></Layout>} />
        <Route path="/community" element={<Layout><Community /></Layout>} />
        <Route path="/workshop" element={<Layout><Workshop /></Layout>} />
        <Route path="/cheatsheet" element={<Layout><CheatsheetApp /></Layout>} />

        {/* Games */}
        <Route path="/games/emoji" element={<EmojiGame />} />
        <Route path="/games/logo" element={<LogoGuess />} />
        <Route path="/games/celebrity" element={<CelebrityGuess />} />
        <Route path="/games/memory" element={<MemoryGame />} />
        <Route path="/games/codebreaker" element={<CodeBreakerGame />} />
        <Route path="/games/typing" element={<TypingRacerGame />} />
        <Route path="/games/quiz" element={<Quiz />} />

        {/* Workshop */}
        <Route path="/workshop/:workshop" element={<Layout><WebKoans /></Layout>} />
        <Route path="/workshop/:workshop/:topic" element={<Layout><KoanPage /></Layout>} />
      </Routes>
    </>
  );
}

export default App;

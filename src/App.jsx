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


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Docs />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/games" element={<Layout><Games /></Layout>} />
        <Route path="/community" element={<Layout><Community /></Layout>} />

        {/* Games */}
        <Route path="/games/emoji" element={<EmojiGame />} />
        <Route path="/games/logo" element={<LogoGuess />} />
        <Route path="/games/celebrity" element={<CelebrityGuess />} />
        <Route path="/games/memory" element={<MemoryGame />} />
      </Routes>
    </>
  );
}

export default App;

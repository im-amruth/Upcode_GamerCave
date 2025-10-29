import ImageGame from "../components/ImageGame"
import gameData from "../database/logo-guess.json"

const LogoGuess = () => {
  return (
    <div>
      <ImageGame gameData={gameData} />
    </div>
  )
}

export default LogoGuess

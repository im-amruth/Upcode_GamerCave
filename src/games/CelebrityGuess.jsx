import ImageGame from "../components/ImageGame"
import gameData from "../database/celebrity-guess.json"

const CelebrityGuess = () => {
  return (
    <div>
      <ImageGame gameData={gameData} />
    </div>
  )
}

export default CelebrityGuess

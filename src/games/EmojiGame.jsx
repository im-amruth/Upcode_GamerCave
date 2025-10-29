import ImageGame from "../components/ImageGame"
import gameData from "../database/emoji-reveal.json"

const EmojiGame = () => {
  return (
    <div>
      <ImageGame gameData={gameData} />
    </div>
  )
}

export default EmojiGame

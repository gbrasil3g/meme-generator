import React, { useState } from 'react'
import axios from 'axios'
import MemeImage from '../components/MemeImage'

import '../styles/pages/MainStyle'


interface MemeProps {
  url: string
  width: number
  height: number
}

const Main: React.FC = () => {
  const [meme, setMeme] = useState<MemeProps[] | []>([])
  const [pos, setPos] = useState(0)

  async function loadMeme(): Promise<any> {
    const { data } = await axios.get('https://api.imgflip.com/get_memes')

    setMeme(data.data.memes)

    const position = Math.floor(Math.random() * (100 + 0) + 0)

    const imageDiv = document.getElementById('image')
    
    setPos(position)
  }

  if (!meme) {
    return <h1>Carregando meme...</h1>
  }

  return (
    <>
      <div id="image">
          <MemeImage url={meme[pos].url} height={meme[pos].height} width={meme[pos].width} />
      </div>

      <button onClick={() => loadMeme()}>Gerar meme utilizando IMGFLIP</button>
    </>
  )
}

export default Main
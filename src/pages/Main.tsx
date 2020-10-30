import React, { useState } from 'react'
import MemeImage from '../components/MemeImage'

import { Container } from '../styles/pages/MainStyle'
import api from '../services/api'


interface MemeProps {
  url: string
  width: number
  height: number
}

const Main: React.FC = () => {
  const [meme, setMeme] = useState<MemeProps[] | []>([])
  const [pos, setPos] = useState(0)

  async function loadMeme(): Promise<any> {
    const { data } = await api.get('get_memes')

    setMeme(data.data.memes)

    const position = Math.floor(Math.random() * (100 + 0) + 0)
    
    setPos(position)
  }

  if (!meme) {
    return <h1>Loading meme...</h1>
  }

  return (
    <Container>
      <div id="image">
          <MemeImage url={meme[pos] ? meme[pos].url : 'No url was provided!'} height={meme[pos] ? 500 : 100} width={meme[pos] ? 500 : 100} />
      </div>

      <hr />

      <button onClick={() => loadMeme()}>Generate meme with IMGFLIP api</button>
    </Container>
  )
}

export default Main
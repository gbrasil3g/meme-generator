import React from 'react';

// import { Container } from './styles';

import { Container } from '../styles/components/MemeImageStyle'

interface MemeProps {
  url: string
  width: number
  height: number
}

const MemeImage: React.FC<MemeProps> = ({ url, width, height }) => {
  return (  
    <Container>
      <img 
        src={url} 
        alt="meme"
        width={width}
        height={height}
      />
    </Container>
  )
}

export default MemeImage;
import React from 'react';

// import { Container } from './styles';

interface MemeProps {
  url: string
  width: number
  height: number
}

const MemeImage: React.FC<MemeProps> = ({ url, width, height }) => {
  return (  
    <img 
    src={url} 
    alt="meme"
    width={width}
    height={height}
    />
  )
}

export default MemeImage;
import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const Logobox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  @keyframes move {
    33% {transform: rotate(-30deg);}
    66% {transform: rotate(30deg);}
    100% {transform: rotate(0deg);}
  }

  img {
    transition: all ease-in-out;
  }
  
  &:hover img {
    animation-name: move;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
`

const Logo: React.FC = () => {
  const logoImg = `/glasses${useColorModeValue('', '-dark')}.png`

  return (
    <Link href='/'>
      <a>
        <Logobox>
          <Image src={logoImg} width={20} height={20} alt='logo' />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c'
            fontWeight='bold'
            ml={3}
          >
            Nevio Gomez
          </Text>
        </Logobox>
      </a>
    </Link>
  )
}

export default Logo

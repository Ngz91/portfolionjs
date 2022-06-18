import react, { ReactNode } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import React from 'react'

type gridProps = {
  children?: ReactNode
  id?: number
  slug?: string
  brief_desc: string
  title: string
  thumbnail: string
}

export const GridItem: React.FC<gridProps> = ({
  children,
  id,
  slug,
  title,
  thumbnail,
}) => (
  <Box w='100%' textAlign='center'>
    <LinkBox cursor='pointer'>
      <Image
        src={thumbnail}
        alt={title}
        className='grid-item-thumbnail'
        loading='lazy'
        width={20}
        height={20}
      />
      <LinkOverlay
        href={`/projects/${id}/${slug}`}
        target='_blank'
        rel='nooperner noreferrer'
      >
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectsGridItem: React.FC<gridProps> = ({
  id,
  slug,
  brief_desc,
  title,
  thumbnail,
}) => (
  <Box
    w='100%'
    textAlign='center'
    boxShadow='2xl'
    paddingBottom={6}
    mt={6}
    rounded='lg'
    transition='all 500ms ease-in-out'
    _hover={{ bgColor: 'teal.800' }}
  >
    <NextLink href={`/projects/${id}/${slug}`}>
      <LinkBox cursor='pointer'>
        <Image
          src={thumbnail}
          alt={title}
          className='grid-item-thumbnail'
          blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
          placeholder='blur'
          width={425}
          height={250}
          style={{ borderRadius: '10px 10px 0px 0px' }}
        />
        <LinkOverlay href={`projects/${id}/${slug}`} target='_blank'>
          <Text
            mt={2}
            fontSize={20}
            style={{ textShadow: '0.5px 0.5px black' }}
          >
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} style={{ textShadow: '0.5px 0.5px black' }}>
          {brief_desc}
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
      border-radius: 12px;
      }
    `}
  />
)

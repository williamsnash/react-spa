import {
  Progress,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react'

export default function Skill(
  { skill, value, color, size, height }:
    { skill: string, value: number, color: string, size: string, height: string }) {
  if (!size && !height) size = 'sm'
  return (
    <div className={`skill-${skill}`} style={{ color: 'black' }}>
      <Flex>
        <Box p='0'>
          {skill}
        </Box>
        <Spacer />
        <Box p='0'>
          {value}%
        </Box>
      </Flex>
      {size ? <Progress colorScheme={color} size={size} borderRadius="1rem" value={value} /> : null}
      {height ? <Progress colorScheme={color} height={height} borderRadius="1rem" value={value} /> : null}
    </div>
  )
}
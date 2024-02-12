import './About.css'
import {
  Stack,
  Flex,
  Box
} from '@chakra-ui/react'

import Skill from '../../components/skill'


export default function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is a simple SPA made using React. This is the About page.</p>
      <Flex color='white' className='skills'>
        <Box className="skills-stack" flex='1'>
          <h1 style={{ color: 'black' }}>Programming Skills</h1>
          <Stack spacing={3}>
            <Skill skill='React' value={80} color='red' />
            <Skill skill='Python' value={90} color='blue' />
          </Stack>
        </Box>
        <Box className="skills-stack" flex='1'>
          <h1 style={{ color: 'black' }}>Other Skills</h1>
          <Stack spacing={5}>
          </Stack>
        </Box>
      </Flex>
      <div>

      </div>
    </div>
  );
}
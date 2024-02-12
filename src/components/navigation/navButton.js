import { NavLink } from 'react-router-dom';
import './navbar.css';

import { Button } from "@chakra-ui/react";

export default function NavButton({ link, text }) {
  return (
    <NavLink to={link}>
      <Button borderRadius='md' colorScheme='teal' h={8} alignItems='center' variant='solid'>
        {text}
      </Button>
    </NavLink>
  );
}
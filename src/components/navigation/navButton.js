import './navbar.css';

import { Button } from "@chakra-ui/react";

export default function NavButton({ link, text }) {
  return (
    <a href={`#${link}`} className="nav-button">
      <Button borderRadius='md' colorScheme='teal' h={8} alignItems='center' variant='solid'>
        {text}
      </Button>
    </a>
  );
}
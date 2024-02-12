import './navbar.css';

import {
  ButtonGroup,
  Flex,
  Spacer
} from "@chakra-ui/react";

import NavButton from './navButton';
import MobileNav from './mobileNav';

/*

export default function Navbar() {
  
  return (
    <>
      <div className="hidden desktop-nav sm:block justify-between items-center h-12 bg-purple-600">
        <Flex alignItems="center" justifyContent="center" padding="2">
          <NavButton link="" text="Home" />
          <Spacer />
          <ButtonGroup gap='0.25'>
            <NavButton link="/about" text="About" />
            <NavButton link="/projects" text="Projects" />
            <NavButton link="/gallery" text="Gallery" />
          </ButtonGroup>
        </Flex>
      </div>
      <div className="mobile-nav sm:hidden h-12 bg-red-500">
        <Flex alignItems="center" justifyContent="center" padding="1">
          <NavButton link="/" text="Home" />
          <Spacer />
          <MobileNav />
        </Flex>
      </div>
    </>
  );
}
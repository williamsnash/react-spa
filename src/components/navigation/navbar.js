import './navbar.css';

import {
  ButtonGroup,
  Flex,
  Spacer
} from "@chakra-ui/react";

import NavButton from './navButton';
import MobileNav from './mobileNav';


export default function Navbar() {
  return (
    <>
      <div className="desktop-nav" style={{ height: '2.5em' }}>
        <Flex alignItems="center" justifyContent="center" padding="1">
          <NavButton link="" text="Home" />
          <Spacer />
          <ButtonGroup gap='0.25'>
            <NavButton link="/about" text="About" />
            <NavButton link="/projects" text="Projects" />
            <NavButton link="/gallery" text="Gallery" />
          </ButtonGroup>
        </Flex>
      </div>
      <div className="mobile-nav">
        <Flex alignItems="center" justifyContent="center" padding="1">
          <NavButton link="/" text="Home" />
          <Spacer />
          <MobileNav />
        </Flex>
      </div>
    </>
  );
}
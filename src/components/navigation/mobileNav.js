import './navbar.css';
import { Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

export default function MobileNav() {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<HamburgerIcon />} />
      <MenuList>
        <MenuItem>
          <NavLink className="mobile-link" to="/about" >About</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="mobile-link" to="/projects">Projects</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink className="mobile-link" to="/gallery">Gallery</NavLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
import { FC } from 'react'
import { LiknsList, Logo, NavBarContainer } from './styles'

import logo from '../../assets/logo.png'
import menuData from '../../appData/menu'

interface NavBarProps {
    isMobile: boolean
}

const Navbar: FC<NavBarProps> = ({ isMobile }) => {    
    return (
        <NavBarContainer>
            <Logo>
            <img src={logo} alt='' />
            </Logo>
            <LiknsList>
            {
                menuData.map( (menuItem, index) => (
                    <li key={`menu-${index}`}>
                        <a
                            href={menuItem.link}
                            aria-label={`Link para ${menuItem.text}`}
                        >
                            {menuItem.text}
                        </a>
                    </li>
                ))
            }
            </LiknsList>
        </NavBarContainer>
    )
}

export default Navbar
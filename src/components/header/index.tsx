import { FC, useEffect, useState } from 'react'
import { LiknsList, Logo, MobileBar, NavBarContainer } from './styles'

import logo from '../../assets/logo.png'
import menuData from '../../appData/menu'
import { menu } from '../../assets/icons'

interface NavBarProps {
    isMobile: boolean
}

const Navbar: FC<NavBarProps> = ({ isMobile }) => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if(window.innerWidth > 768) {
            setIsOpen(true)
        }
      }, [])
    return (
        <NavBarContainer>
            <Logo>
                <img src={logo} alt='' />
            </Logo>
            <MobileBar onClick={()=> setIsOpen(!isOpen)}>
                <span>Navegação</span>
                <img src={menu} alt="Menu Mobile" className='mobileMenuIcon' />
            </MobileBar>
            <LiknsList>
            {
                isOpen && menuData.map( (menuItem, index) => (
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
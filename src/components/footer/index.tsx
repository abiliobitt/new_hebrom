import { FC } from 'react'
import { FooterContainer } from './styles'

import {insta} from '../../assets/icons'

interface FooterProps {
    isMobile?: boolean
}

const Footer: FC<FooterProps> = ({ isMobile }) => {
    return (
        <FooterContainer>
            <div className="copyright">
                <p>{new Date().getFullYear()} Todos os direitos reservados- Hebrom Serviços imobiliários</p>
            </div>
            <div className="social">
                <a href="https://instagram.com" className="support">Fale Conosco</a>
                <a href="https://facebook.com" className="face">f</a>
                <a href="https://instagram.com" className="insta"><img src={insta} alt="" /></a>
            </div>
        </FooterContainer>
    )
}

export default Footer
import { FC } from 'react'
import { Container, Half, SectionTitle } from '../generalStyles'
import { P, TextLink, TextSectionContainer } from './styles'


interface TextSectionProps {
    title: string
    p: string
    imageUrl: string
    variant: '-primary' | '-secondary'
    imgPosition: 'right' | 'left'
    textLink?: string
    link?: string
}

const TextSection: FC<TextSectionProps> = ({ title, p, imageUrl, variant, imgPosition, textLink, link }) => {
    const rightImg = <>
        <Half>
            <SectionTitle className={variant}>{title}</SectionTitle>
            {/* 150 palavras */}
            <P className={variant}>
                {p}
                {textLink && link && <TextLink href={link} className={variant}>{textLink}</TextLink>}
            </P>
        </Half>
        <Half>
            <img src={imageUrl} alt="" />
        </Half>
    </>
    const leftImg = <>
        <Half>
            <img src={imageUrl} alt="" />
        </Half>
        <Half>
            <SectionTitle className={variant}>{title}</SectionTitle>
            <P className={variant}>
                {p}
                {textLink && link && <TextLink href={link} className={variant}>{textLink}</TextLink>}
            </P>
        </Half>
    </>
    return (
        <TextSectionContainer>
            <Container>
                {
                    imgPosition === 'right' ?
                        rightImg :
                        leftImg
                }

            </Container>
        </TextSectionContainer>
    )
}

export default TextSection
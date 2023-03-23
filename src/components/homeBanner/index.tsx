import { FC, ReactElement } from 'react'

import { CustomButton, CustomSelect, HomeBannerContainer, SearchBar, SearchBox, SearchInput } from './styles'

interface HomeBannerProps {
    children?: ReactElement
}

const HomeBanner: FC<HomeBannerProps> = ({ children }) => {    
    return (
        <HomeBannerContainer>
            <SearchBox>
            <h1>Seu sonho, nossa missão!</h1>
            <p>A Hebrom Serviços Imobiliários está aqui para te auxiliar na aquisição do seu imóvel dos sonhos!</p>
        <SearchBar>
              <CustomSelect>
                <option value='2'>Venda</option>
                <option value='1'>Alugar</option>
              </CustomSelect>
              <CustomSelect>
                <option value='0'> Todos</option>
                <option value='1'> Residencial</option>
                <option value='2'> Comercial</option>
                <option value='3'> Residencial e comercial</option> 
                <option value='4'> industrial</option>
                <option value='5'> rural</option>
                <option value='6'> temporada</option>
                <option value='7'> corporativa</option>
                <option value='8'> comercial e industrial</option>
              </CustomSelect>
              <SearchInput type="text" placeholder="Condomínio, região, bairro, rua" />
              <CustomSelect>
                <option value='0'> Quartos</option>
                <option value='1'> A partir de 1 quarto</option>
                <option value='2'> A partir de 2 quartos</option>
                <option value='3'> A partir de 3 quartos</option> 
                <option value='4'> A partir de 4 quartos</option>
                <option value='5'> A partir de 5 quartos</option>
              </CustomSelect>
              <CustomSelect>
                <option value='0'> Vagas</option>
                <option value='1'> A partir de 1 vaga</option>
                <option value='2'> A partir de 2 vagas</option>
                <option value='3'> A partir de 3 vagas</option> 
                <option value='4'> A partir de 4 vagas</option>
                <option value='5'> A partir de 5 vagas</option>
              </CustomSelect>
            <CustomButton type='submit'>Buscar</CustomButton>
            </SearchBar>
            </SearchBox>
        </HomeBannerContainer>
    )
}

export default HomeBanner
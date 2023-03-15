/* eslint-disable no-unused-vars */
import { FormEvent } from 'react'
import {
  Container,
  Content,
  Banner,
  Footer,
  Header,
  Logo,
  SelectCity,
  SelectState,
} from './styles'

export function Home() {
  function handleSearchPets(event: FormEvent) {
    event.preventDefault()
    console.log('handleSearchPets')
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  return (
    <Container>
      <Content>
        <Header>
          <Logo>
            <img src="src/assets/icons/logo.svg" alt="" />
          </Logo>
        </Header>

        <Banner>
          <h1>Leve a felicidade para o seu lar</h1>
          <img src="src/assets/icons/banner.svg" alt="" />
        </Banner>

        <Footer>
          <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>

          <form onSubmit={handleSearchPets}>
            <span>Busque um amigo:</span>
            <SelectState>
              <option value="1">PE</option>
            </SelectState>
            <SelectCity>
              <option value="1">Recife</option>
            </SelectCity>
            <button type="submit" aria-label="Pesquisar">
              <img src="src/assets/icons/search.svg" alt="" />
            </button>
          </form>
        </Footer>
      </Content>
    </Container>
  )
}

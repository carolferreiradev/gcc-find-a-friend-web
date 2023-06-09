import logo from '@/assets/icons/logo.svg'

import {
  AsideContent,
  AsideHeader,
  Container,
  ContentFilters,
  ContentHeader,
} from './styles'
import { Link } from 'react-router-dom'

export function AsideDashboard() {
  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Menu</ContentHeader>
        <ContentFilters>
          <ul>
            <li>
              <Link to="/create-pet">Cadastrar Pet</Link>
            </li>
          </ul>
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}

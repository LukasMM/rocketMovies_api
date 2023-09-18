/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Brand, Search, Profile } from './styles'

import { Input } from '../../components/Input'

export function Header({ handleChange }) {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  function handleSignOut(){
    navigation("/")
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => handleChange(e)}
        />
      </Search>

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <span onClick={handleSignOut}>sair</span>
        </div>

        <Link to="/profile">
          <img
            src={avatarUrl}
            alt={user.name}
          />
        </Link>
      </Profile>
    </Container>
  )
}
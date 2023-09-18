/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth'
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { api } from '../../services/api'

import { Container, Content, Info, Title, Tags } from './styles'

import { Header } from '../../components/Header'
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

export function Details() {
  const [data, setData] = useState(null)

  const { user } = useAuth()
  const params = useParams()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if (confirm) {
      await api.delete(`/movie_notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie_notes/${params.id}`)
      setData(response.data)
      console.log(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      <main>
        <button type='button' onClick={handleBack}>
          <FiArrowLeft /> Voltar
        </button>

        <Content>
          {
            data &&
            <>
              <Title>
                <h1>{data.title}</h1>
                <Rating grade={data.rating} isBig />
              </Title>

              <Info>
                <div>
                  <img src={avatarUrl} alt="Foto do usuário" />
                  <p>Por {user.name} </p>
                </div>

                <div>
                  <FiClock />
                  <p>
                    {data.created_at.toLocaleString('pt-BR')}
                  </p>
                </div>
              </Info>

              <Tags>
                {
                  data.tags &&
                  data.tags.map(tag => ( 
                    <Tag
                      key={String(tag.id)}
                      title={tag.title}
                    />
                  ))
                }
              </Tags>

              <p>
                {data.description}
              </p>
              
              <div>
                <Button
                  title="Excluir filme"
                  className="btn-secondary"
                  onClick={handleRemove}
                />
              </div>
            </>
          }
        </Content>
      </main>
    </Container>
  )
}
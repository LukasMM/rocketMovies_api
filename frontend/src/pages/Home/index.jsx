import { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Content, Title } from './styles'

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Button } from '../../components/Button'

export function Home() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleNewMovie() {
    navigate('/new')
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  function handleChange(e) {
    setSearch(e.target.value)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`movie_notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [])

  return (
    <Container>
      <Header handleChange={handleChange} />

      <main>
        <Title>
          <h1>Meus filmes</h1>

          <Button icon={FiPlus} title="Adicionar filme" onClick={handleNewMovie} />
        </Title>

        <Content>
          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Content>
      </main>
    </Container>
  )
}
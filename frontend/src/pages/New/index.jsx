/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi'

import { Container, Content, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

export function New() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Digite o titulo da nota")
    }

    const number = Number(rating)
    
    if(!(number <= 5 && number >= 0)) {
      return alert("De uma nota de 0 a 5")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
    }

    await api.post("/movie_notes", {
      title,
      rating,
      description,
      tags,
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <button type='button' onClick={handleBack}>
          <FiArrowLeft /> Voltar
        </button>

        <Content>
          <h1>Novo filme</h1>

          <Form>
            <div>
              <Input
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
              />

              <Input
                placeholder="Sua nota (de 0 a 5)"
                onChange={e => setRating(e.target.value)}
              />
            </div>

            <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />

            <h2>Marcadores</h2>

            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder="Novo marcador"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>

            <div>
              <Button 
                title="Salvar alterações"
                onClick={handleNewNote}
              />
            </div>
          </Form>
        </Content>
      </main>
    </Container>
  )
}
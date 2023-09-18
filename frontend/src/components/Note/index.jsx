/* eslint-disable react/prop-types */
import { Container } from './styles'
import { Tag } from '../Tag'
import { Rating } from '../Rating'

// eslint-disable-next-line react/prop-types
export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <div>
        <h1>{data.title}</h1>
        <Rating grade={data.rating} />
      </div>
      
      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.title} />)
          }
        </footer>
      }
    </Container>
  )
}
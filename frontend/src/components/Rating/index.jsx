import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'

import { Container } from './styles'

// eslint-disable-next-line react/prop-types
export function Rating({ grade, isBig }) {
  let stars = []

  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= grade) {
      stars.push(<VscStarFull key={cont} />)
    } else {
      stars.push(<VscStarEmpty key={cont} />)
    }
  }

  return <Container $isbig={isBig}>{stars}</Container>
}
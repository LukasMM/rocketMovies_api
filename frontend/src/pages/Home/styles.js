import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    margin: 4rem 12rem;

    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.div`
  margin-bottom: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
    font-weight: 400;
  }

  > button {
    max-width: 21rem;
  }
`

export const Content = styled.div`
  height: 68vh;
  padding: 0px 8px;

  overflow-y: auto;
`
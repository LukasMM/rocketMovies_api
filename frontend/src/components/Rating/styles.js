import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: ${({ $isbig }) => ($isbig ? "center" : "start")};
  gap: 0.4rem;

  svg {
    font-size: ${({ $isbig }) => ($isbig ? "2rem" : "1.2rem")};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
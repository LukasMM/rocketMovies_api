import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.INPUT};
  color: ${({ theme }) => theme.COLORS.PLACEHOLDER};

  margin-bottom: 0.8rem;
  border-radius: 1rem;

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER} 
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`
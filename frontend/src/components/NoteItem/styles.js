import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.INPUT};
  color: ${({ theme, $isnew }) => $isnew ? theme.COLORS.PLACEHOLDER : theme.COLORS.WHITE};

  border: ${({ theme, $isnew }) => $isnew ? `0.2rem dashed ${theme.COLORS.PLACEHOLDER}` : "none"};

  border-radius: 1rem;

  > button { 
    border: none;
    background: none;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};

      height: 2.4rem;
      width: 2.2rem;
    }
  }

  > input {
    height: 56px;

    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }
  }
`
import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin-left: 1.6rem;
  }
`
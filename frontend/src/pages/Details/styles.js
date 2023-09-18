import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    margin: 4rem 12rem;

    display: flex;
    flex-direction: column;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.6rem;
      font-weight: 400;

      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
  
  .btn-secondary {
    margin-top: 4rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: 36px;
    font-weight: 500;

    margin: 2.4rem 0;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    img {
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.6rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.TEXT};
      text-align: justify;
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
`

export const Tags = styled.div`
  margin: 4rem 0;

  > span {
    background-color: ${({ theme }) => theme.COLORS.PINK_50};
  }
`

export const Content = styled.div`
  height: 70vh;
  padding: 0px 8px;

  overflow-y: auto;

  > p {
    color: ${({ theme }) => theme.COLORS.TEXT};
    text-align: justify;
    font-size: 16px;
    font-weight: 400;
  }
`
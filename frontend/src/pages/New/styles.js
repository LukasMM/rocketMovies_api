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
`

export const Content = styled.div`
  height: 70vh;
  padding: 0px 8px;

  overflow-y: auto;

  > h1 {
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: 36px;
    font-weight: 500;

    margin-top: 2.4rem;
    margin-bottom: 4rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    gap: 4rem;
  }

  > textarea {
    margin: 4rem 0;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 20px;
    font-weight: 400;

    margin-bottom: 2.4rem;
  }

  .tags {
    background-color: ${({ theme }) => theme.COLORS.BLACK};

    padding: 1.6rem;
    border-radius: 0.8rem;

    margin-bottom: 4rem;

    flex-wrap: wrap;
  }

  .btn-secondary {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
import styled from 'styled-components'

export const Container = styled.header`
  height: 11.5rem;
  width: 100%;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;

  padding: 2.4rem 12rem;
`

export const Brand = styled.div`
  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Search = styled.div`
  width: 100%;

  > div {
    margin: 0;

    > input {
      padding: 1.2rem 2.4rem;
    }
  } 
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 0.9rem;

    strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.TEXT};
      text-wrap: nowrap;
    }

    span {
      cursor: pointer;
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }
  }

  > a > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`
import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_50};

  border: none;
  border-radius: 1.6rem;

  padding: 3.2rem;
  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > div {
    > h1 {
      flex: 1;
      text-align: left;
      font-weight: 700;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.TEXT};
    } 
  }

  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    overflow: hidden;
    position: relative;
    max-height: 4.2rem;
    text-align: justify;
    margin-right: 0rem;
    padding-right: 1.5rem;

    &::before {
      content: '...';
      position: absolute;
      right: 0px;
      bottom: 0;
    }
  }

  > footer {
    width: 100%;
    display: flex;
  }
`
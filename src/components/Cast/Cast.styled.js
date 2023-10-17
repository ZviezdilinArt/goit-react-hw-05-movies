import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  /* justify-content: space-between; */
  padding: 0;
  row-gap: 25px;
  column-gap:110px;
  li {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    width: 200px;
    /* min-height: 350px; */
    /* margin-bottom: 25px; */
    /* border: 2px solid black; */
    /* border-radius: 10px; */
  }
  img {
    border: 2px solid black;
    border-radius: 10px;
    height: auto;
    max-height: 350px;
    /* margin: 0 auto; */
  }
  p {
    margin: 5px 0px;
    font-size: 16px;
  }

  /* display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto; */
`;
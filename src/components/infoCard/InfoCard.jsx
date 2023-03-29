import styled from 'styled-components';

const Title = styled.h2`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrap = styled.div`
  padding: 4em;
  background: papayawhip;
`;

const DateVal = styled.p`
  font-style: italic;
  color: gray;
  margin: 1rem;
`;

const Button = styled.button`
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background-color: #3296ed;
  }
`;

function InfoCard() {
  return (
    <Wrap>
      <Title>Card title</Title>
      <DateVal>2022-02-22</DateVal>
      <Button>Click me</Button>
    </Wrap>
  );
}

export default InfoCard;

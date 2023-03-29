import styled from 'styled-components';

const Circle = styled.div`
  display: inline-block;
  width: 15.7rem;
  height: 15.7rem;
  border: 8px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-color: ${(props) => {
    return props.myColor || 'black';
  }};
  color: ${(props) => {
    return props.num || 'black';
  }};
`;

const Value = styled.p`
  font-size: 4rem;
  font-weight: 600;
`;

const Title = styled.h3`
  font-size: 1.9rem;
  font-weight: normal;
`;

function SingleCountDown({ time, value, circle, num }) {
  return (
    <Circle myColor={circle} num={num}>
      <Value>{value}</Value>
      <Title>{time}</Title>
    </Circle>
  );
}

export default SingleCountDown;

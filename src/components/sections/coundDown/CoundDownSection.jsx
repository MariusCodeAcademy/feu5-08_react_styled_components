import styled from 'styled-components';
import Grid from '../../ui/Grid.styled';
import SingleCountDown from './SingleCountDown';

const CounDownSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  max-width: 25.6rem;
  font-size: 3.4rem;
  margin-bottom: 0;
  font-weight: normal;
  span {
    font-weight: bold;
    color: tomato;
  }
`;

function CoundDownSection() {
  return (
    <CounDownSection className="container">
      <Title>
        Count Every Second Until the <span>Event</span>
      </Title>
      <Grid cols="5">
        <SingleCountDown time="Days" value={5} circle="blueviolet" num="red" />
        <SingleCountDown />
        <SingleCountDown />
        <SingleCountDown />
      </Grid>
    </CounDownSection>
  );
}

export default CoundDownSection;

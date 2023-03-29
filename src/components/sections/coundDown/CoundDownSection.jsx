import styled from 'styled-components';

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
    </CounDownSection>
  );
}

export default CoundDownSection;

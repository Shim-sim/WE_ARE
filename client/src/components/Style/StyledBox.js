import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: ${(props) => props.marginTop || '20%'};
`;

function StyledBox({ marginTop, children }) {
  return <Box marginTop={marginTop}>{children}</Box>;
}

export default StyledBox;

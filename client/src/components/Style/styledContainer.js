import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: ${(props) => props.minHeight || "80vh"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`

function StyledContainer({children, minHeight}) {
    return (
        <Container minHeight={minHeight}>
            {children}
        </Container>
    )
}

export default StyledContainer;
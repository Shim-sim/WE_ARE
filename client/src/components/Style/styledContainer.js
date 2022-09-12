import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: ${(props) => props.minHeight || "80vh"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
	margin-top: ${(props) => props.marginTop || "0px"};
`

function StyledContainer({children, minHeight, marginTop}) {
    return (
        <Container minHeight={minHeight} marginTop={marginTop}>
            {children}
        </Container>
    )
}

export default StyledContainer;
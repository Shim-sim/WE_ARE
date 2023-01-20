import styled from 'styled-components';

const MenuBox = styled.div`
  color: #212121;
  width: 80%;
  margin: 8px 0px;
  margin-bottom: 12px;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  padding: 20px 24px;
  position: absolute;
  left: 10%;
`;

const Alert = styled.p`
  color: #c62917;
  font-size: 15px;
  line-height: 18px;
  font-weight: normal;
  text-align: center;
  padding: 50px 0px;
`;

export default function AlertBox({ children }) {
  return (
    <MenuBox>
      <Alert>{children}</Alert>
    </MenuBox>
  );
}

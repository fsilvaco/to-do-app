import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonFloat = styled.button`
  position: fixed;
  bottom: 30px;

  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #515cc6;
  background-color: #3f4ea0;
  color: #fff;
  font-size: 34px;
  font-weight: 100;
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 25%);

  :focus {
    outline: none;
  }
`;

function Button() {
  return (
    <Flex>
      <ButtonFloat onClick={() => alert("Hello!")}>+</ButtonFloat>
    </Flex>
  );
}

export default Button;

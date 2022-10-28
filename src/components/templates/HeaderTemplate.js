import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  align-items: center;
  width: 100%;
  height: 10%;
  border-bottom: solid 0.3em black;
`;

const StyledTitle = styled.h2`
  font-size: 1.5em;
`;

const StyledUserInfo = styled.div`
  width: fit-content;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1em;
`;
const StyledUserName = styled.div`
  width: fit-content;
  padding: 0.3em;
  height: 100%;
  margin-right: 10%;
  font-weight: 600;
  white-space: nowrap;
`;
const StyledButton = styled.button`
  width: 100%;
  padding: 0.3em 1.3em 0.3em 1.3em;
  background-color: ${(props) => (props.isLoggin ? "gray" : "black")};
  color: white;
  margin-right: 30%;
  white-space: nowrap;
`;

const HeaderTemplate = {
  Header: StyledHeader,
  Title: StyledTitle,
  UserContainer: StyledUserInfo,
  UserName: StyledUserName,
  IsLogginButton: StyledButton,
};

export default HeaderTemplate;

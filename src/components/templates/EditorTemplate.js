import styled from "styled-components";

const StyledEditContainer = styled.section`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
`;

const StyledTitle = styled.input`
  font-size: 4em;
  width: 80%;
`;

const StyledQuillEditor = styled.div`
  font-size: 2em;
  height: 500px;
`;

const EditorTemplate = {
  Container: StyledEditContainer,
  Title: StyledTitle,
  Text: StyledQuillEditor,
};

export default EditorTemplate;

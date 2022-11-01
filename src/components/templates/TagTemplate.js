import styled from "styled-components";

const styledTagSection = styled.section`
  width: 80%;
`;

const styledTagForm = styled.form`
  width: 100%;
`;

const styledTagInput = styled.input`
  width: 50%;
  font-size: 1.2em;
`;

const styledTagList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: 0;
`;

const styledTag = styled.li`
  margin: 0.5em;
  border: solid 0.1em black;
  border-radius: 30px;
  padding: 0.4em;
  text-align: center;

  span {
    margin-right: 0.2em;
  }
`;

const TagBoxTemplate = {
  Section: styledTagSection,
  Form: styledTagForm,
  Input: styledTagInput,
  List: styledTagList,
  Item: styledTag,
};

export default TagBoxTemplate;

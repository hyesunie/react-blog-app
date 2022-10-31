import { useRef } from "react";
import { useEffect } from "react";
import EditorTemplate from "./templates/EditorTemplate";
import Quill from "quill";

function Editor() {
  const $quillEditor = useRef(null);

  useEffect(() => {
    //TODO:이전에 내용 저장, 불러오기
    const option = {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"],
        ],
      },
      placeholder: "내용을 입력하세요.",
      theme: "snow",
    };
    const editor = new Quill($quillEditor.current, option);
  }, []);

  return (
    <EditorTemplate.Container>
      <EditorTemplate.Title placeholder="제목을 입력하세요" />
      <EditorTemplate.Text ref={$quillEditor}></EditorTemplate.Text>
    </EditorTemplate.Container>
  );
}

export default Editor;

import { useCallback } from "react";
import { useState } from "react";
import TagBoxTemplate from "./templates/TagTemplate";
import { v4 as uuidv4 } from "uuid";

function TagItem({ id, name, onRemove }) {
  return (
    <TagBoxTemplate.Item>
      <span>{name}</span>
      <button id={id} onClick={onRemove}>
        x
      </button>
    </TagBoxTemplate.Item>
  );
}

function TagBox() {
  const [tagList, setTagList] = useState([]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const value = e.target.firstElementChild.value;
      e.target.firstElementChild.value = "";
      if (tagList.some((tag) => tag.value === value)) return;
      setTagList((prev) => [...prev, { id: uuidv4(), value }]);
    },
    [tagList]
  );

  const onRemove = useCallback(
    (e) => {
      const id = e.target.id;
      const newTagList = tagList.filter((tag) => tag.id !== id);
      setTagList((prev) => [...newTagList]);
    },
    [tagList]
  );

  return (
    <TagBoxTemplate.Section>
      <TagBoxTemplate.Form onSubmit={onSubmit}>
        <TagBoxTemplate.Input type="text" placeholder="태그를 입력해주세요." />
      </TagBoxTemplate.Form>
      <TagBoxTemplate.List>
        {tagList.map((tag) => (
          <TagItem
            key={tag.id}
            name={tag.value}
            id={tag.id}
            onRemove={onRemove}
          />
        ))}
      </TagBoxTemplate.List>
    </TagBoxTemplate.Section>
  );
}

export default TagBox;

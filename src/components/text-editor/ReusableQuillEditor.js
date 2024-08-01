import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const Main = styled.div`
  border: 1px solid var(--darkGray-color);
  border-radius: 10px;

  .quill > .ql-snow {
    border: none;
  }
  .quill > .ql-toolbar {
    border-bottom: 1px solid var(--darkGray-color);
  }
`;

const ReusableQuillEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      ["link"],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "align",
    "list",
    "bullet",
    "script",
    "link",
    "color",
    "background",
  ];

  return (
    <Main>
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        style={{ minHeight: "25vh" }}
      />
    </Main>
  );
};

export default ReusableQuillEditor;

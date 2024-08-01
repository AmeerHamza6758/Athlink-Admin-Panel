import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import ReusableQuillEditor from "../../../components/text-editor/ReusableQuillEditor";
import Modal from "../../../components/text-editor/Modal";
import useModal from "../../../helpers/hooks/useModal";

const AboutData = () => {
  const { isOpen, openModal, closeModal, initialData } = useModal();
  const [title, setTitle] = useState("About US");
  const [content, setContent] = useState(`
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At deserunt
    dolorum natus amet reiciendis. Cupiditate tempore, labore harum rem vero
    quisquam doloremque incidunt minima, ipsum, nostrum atque. Libero,
    nostrum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
    elit.
  `);

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSaveClick = () => {
    // Handle save logic here
    closeModal();
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-primaryText">About us</p>
        <div
          onClick={() => openModal(content)}
          className="flex items-center gap-1 justify-center bg-darkGrey py-1 px-2 rounded-lg text-base font-normal hover:font-semibold text-white cursor-pointer"
        >
          <CiEdit size={20} />
          <p>Edit</p>
        </div>
      </div>
      <hr className="mb-4 w-full" />
      <p dangerouslySetInnerHTML={{ __html: content }} />

      <Modal isOpen={isOpen} closeModal={closeModal} title={title} onSubmit={handleSaveClick}>
        <div>
          <ReusableQuillEditor value={content} onChange={handleChange} />
          <button
            onClick={handleSaveClick}
            className="my-4 bg-secondary px-6 py-3 text-white rounded-full"
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AboutData;

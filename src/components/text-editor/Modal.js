import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  max-width: 800px;
`;

const Modal = ({ isOpen, closeModal, children, title }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalBackdrop onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between py-3 px-4 border-b  cursor-pointer">
          <h2 className="text-xl font-semibold">{title}</h2>
          <IoMdClose color="red" size={28} onClick={closeModal}/>
        </div>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    document.body
  );
};

export default Modal;

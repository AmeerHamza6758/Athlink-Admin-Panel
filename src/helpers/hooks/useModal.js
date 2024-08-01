import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState(null);

  const openModal = (data = null) => {
    setInitialData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setInitialData(null);
  };

  return {
    isOpen,
    openModal,
    closeModal,
    initialData,
  };
};

export default useModal;

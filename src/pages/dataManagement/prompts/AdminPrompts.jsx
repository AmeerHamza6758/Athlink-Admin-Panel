import React, { useState } from "react";
import useModal from "../../../helpers/hooks/useModal";
import CustomModal from "../../../components/modals/customModal/CustomModal";
import PromptForm from "../../../components/modals/dataManagementModals/Prompt/CreatePromptForm";
import PromptsTable from "../../../components/tables/dataManagement/PromptsTable";
import Pagination from "../../../components/pagination/Pagination";
import { MdAdd } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { dummyPromptData } from "../../../helpers/dummydata";

const AdminPrompts = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [formTitle, setFormTitle] = useState("Create New Prompt");
  const [initialData, setInitialData] = useState(null);

  // Handle form submission
  const handleFormSubmit = async (data) => {
    if (initialData) {
      // Update prompt logic
      console.log("Updating prompt:", data);
      // Implement your update logic here
    } else {
      // Add new prompt logic
      console.log("Creating new prompt:", data);
    }
    closeModal();
  };

  // Open the modal for editing an existing prompt
  const handleEdit = (id) => {
    const prompt = dummyPromptData.find((item) => item.sr_no === parseInt(id));
    if (prompt) {
      setInitialData(prompt);
      setFormTitle("Edit Prompt");
      openModal();
    }
  };

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-11/12 pt-10 flex flex-col gap-4">
        <h1 className="text-lg font-medium">Prompts</h1>
        <div className="bg-white h-16 w-full rounded-lg flex flex-row px-5 gap-4 items-center">
          <input
            className="border border-[#E2E8F0] text-sm outline-none p-1.5 rounded-md w-10/12"
            placeholder="Search by Name"
          />
          <div className="flex items-center gap-1 justify-center bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold">
            <IoSearch size={20} />
            <button
              className={`primary text-base text-white text-nowrap font-semibold`}
            >
              Search
            </button>
          </div>
          <div
            className="flex items-center gap-1 justify-center bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold"
            onClick={() => {
              setInitialData(null); 
              setFormTitle("Create New Prompt");
              openModal();
            }}
          >
            <MdAdd size={20} />
            <button
              className={`primary text-base text-white text-nowrap font-semibold`}
            >
              Add Prompt
            </button>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg flex flex-col p-5 gap-2">
          <PromptsTable onEdit={handleEdit} />
        </div>
        <Pagination />
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
        title={formTitle}
      >
        <PromptForm initialData={initialData} />
      </CustomModal>
    </div>
  );
};

export default AdminPrompts;

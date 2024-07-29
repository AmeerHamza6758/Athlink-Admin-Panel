import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useModal from "../../../helpers/hooks/useModal";
import CustomModal from "../../../components/modals/customModal/CustomModal";
import PromptForm from "../../../components/modals/dataManagementModals/Prompt/CreatePromptForm";
import PromptsTable from "../../../components/tables/dataManagement/PromptsTable";
import Pagination from "../../../components/pagination/Pagination";

const AdminPrompts = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [formTitle, setFormTitle] = useState("Create New Prompt");

  const handleFormSubmit = (data) => {
    // Handle form submission
    console.log(data);
    closeModal();
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
          <button className="bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold">
            Search
          </button>
          <button
            className="bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold"
            onClick={openModal}
          >
            Add new Prompt
          </button>
        </div>
        <div className="bg-white w-full rounded-lg flex flex-col p-5 gap-2">
          <PromptsTable />
        </div>
        <Pagination />
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
        title={formTitle}
      >
        <PromptForm />
      </CustomModal>
    </div>
  );
};

export default AdminPrompts;

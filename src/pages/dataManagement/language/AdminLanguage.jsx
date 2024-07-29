import React, { Fragment, useState } from "react";
import Pagination from "../../../components/pagination/Pagination";
import LanguageTable from "../../../components/tables/dataManagement/LanguageTable";
import useModal from "../../../helpers/hooks/useModal";
import CustomModal from "../../../components/modals/customModal/CustomModal";
import LanguageForm from "../../../components/modals/dataManagementModals/language/LanguageForm";

const AdminLanguage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [languageTitle, setLanguageTitle] = useState("Add New Language");
  const handleFormSubmit = () => {
    // your form submit logic here
    closeModal();
  };
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-11/12 pt-10 flex flex-col gap-4">
        <h1 className="text-lg font-medium">Languages</h1>
        <div className="bg-white h-16 w-full rounded-lg flex flex-row px-5 gap-4 items-center">
          <input
            className="border border-[#E2E8F0] text-sm outline-none p-1.5 rounded-md w-10/12"
            placeholder="Search by Name"
          />
          <button
            className={`bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold`}
          >
            Search
          </button>
          <button
            className={`bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold`}
            onClick={openModal}
          >
            Add new Language
          </button>
        </div>
        <div className="bg-white w-full rounded-lg flex flex-col p-5 gap-2">
          <LanguageTable />
        </div>
        <Pagination />
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
        title={languageTitle}
      >
        <LanguageForm />
      </CustomModal>
    </div>
  );
};

export default AdminLanguage;

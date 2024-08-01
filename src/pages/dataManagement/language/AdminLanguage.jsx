import React, { useState } from "react";
import Pagination from "../../../components/pagination/Pagination";
import LanguageTable from "../../../components/tables/dataManagement/LanguageTable";
import useModal from "../../../helpers/hooks/useModal";
import CustomModal from "../../../components/modals/customModal/CustomModal";
import LanguageForm from "../../../components/modals/dataManagementModals/language/LanguageForm";
import { MdAdd } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { dummyLanguageData } from "../../../helpers/dummydata";

const AdminLanguage = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [formTitle, setFormTitle] = useState("Add New Language");
  const [initialData, setInitialData] = useState(null);

  const handleFormSubmit = async (data) => {
    if (initialData) {
      console.log("Updating Language:", data);
      // Implement your update logic here, e.g., API call
    } else {
      console.log("Creating new Language:", data);
      // Implement your create logic here, e.g., API call
    }
    closeModal();
  };

  const handleEdit = (id) => {
    const language = dummyLanguageData.find((item) => item.s_no === parseInt(id));
    if (language) {
      console.log(language, 'Language Data');
      setInitialData(language);
      setFormTitle("Update Language");
      openModal();
    }
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
          <div className="flex items-center gap-1 justify-center bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold">
            <IoSearch size={20} />
            <button className="primary text-base text-white text-nowrap font-semibold">
              Search
            </button>
          </div>
          <div
            className="flex items-center gap-1 justify-center bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold"
            onClick={() => {
              setInitialData(null);
              setFormTitle("Add Language");
              openModal();
            }}
          >
            <MdAdd size={20} />
            <button className="primary text-base text-white text-nowrap font-semibold">
              Add Language
            </button>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg flex flex-col p-5 gap-2">
          <LanguageTable onEdit={handleEdit} />
        </div>
        <Pagination />
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
        title={formTitle}
      >
        <LanguageForm initialData={initialData} />
      </CustomModal>
    </div>
  );
};

export default AdminLanguage;

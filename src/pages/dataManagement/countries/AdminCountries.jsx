import React, { useState } from "react";
import Pagination from "../../../components/pagination/Pagination";
import CountriesTable from "../../../components/tables/dataManagement/CountriesTable";
import CustomModal from "../../../components/modals/customModal/CustomModal";
import CountryForm from "../../../components/modals/dataManagementModals/countries/CountryForm";
import useModal from "../../../helpers/hooks/useModal";
import { MdAdd } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { dummyCountryData } from "../../../helpers/dummydata";
const AdminCountries = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [formTitle, setFormTitle] = useState("Add New Country");
  const [initialData, setInitialData] = useState(null);

  const handleFormSubmit = async (data) => {
    if (initialData) {
      // Update city logic
      console.log("Updating city:", data);
      // Implement your update logic here, e.g., API call
    } else {
      // Add new city logic
      console.log("Creating new city:", data);
      // Implement your create logic here, e.g., API call
    }
    closeModal();
  };

  const handleEdit = (id) => {
    const country = dummyCountryData.find((item) => item.s_no === parseInt(id));
    if (country) {
      setInitialData(country);
      setFormTitle("Update Country");
      openModal();
    }
  };
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-11/12 pt-10 flex flex-col gap-4">
        <h1 className="text-lg font-medium">Countries</h1>
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
              setInitialData(null)
              setFormTitle("Add Country");
              openModal();
            }}
          >
            <MdAdd size={20} />
            <button
              className={`primary text-base text-white text-nowrap font-semibold`}
            >
              Add Country
            </button>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg flex flex-col p-5 gap-2">
          <CountriesTable onEdit={handleEdit} />
        </div>
        <Pagination />
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
        title={formTitle}
      >
        <CountryForm initialData={initialData} />
      </CustomModal>
    </div>
  );
};

export default AdminCountries;

import React, { useState } from "react";
import Pagination from "../../../components/pagination/Pagination";
import CountriesTable from "../../../components/tables/dataManagement/CountriesTable";
import CustomModal from "../../../components/modals/customModal/CustomModal";
import CountryForm from "../../../components/modals/dataManagementModals/countries/CountryForm";
import useModal from "../../../helpers/hooks/useModal";
const AdminCountries = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [countryTitle, setCountryTitle] = useState("Add New Country");

  const handleFormSubmit = (data) => {
    // Handle form submission
    console.log(data);
    closeModal();
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
          <button
            className={`bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold`}
          >
            Search
          </button>
          <button
            className={`bg-primary text-base text-white rounded-full hover:bg-primaryHover transition duration-300 ease-in-out text-nowrap py-1.5 px-6 font-semibold`}
            onClick={openModal}
          >
            Add new Country
          </button>
        </div>
        <div className="bg-white w-full rounded-lg flex flex-col p-5 gap-2">
          <CountriesTable />
        </div>
        <Pagination />
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
        title={countryTitle}
      >
        <CountryForm />
      </CustomModal>
    </div>
  );
};

export default AdminCountries;

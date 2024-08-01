import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import CitiesTable from "../../../components/tables/dataManagement/CitiesTable";
import useModal from "../../../helpers/hooks/useModal";
import Pagination from "../../../components/pagination/Pagination";
import CustomModal from "../../../components/modals/customModal/CustomModal";
import CitiesForm from "../../../components/modals/dataManagementModals/cities/CitiesForm";
import { dummyCitiesData } from "../../../helpers/dummydata";

function AdminCities() {
  const { isOpen, openModal, closeModal } = useModal();
  const [formTitle, setFormTitle] = useState("Add City");
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
    // Optional: Refresh the cities list
  };


  const handleEdit = (id) => {
    const city = dummyCitiesData.find((item) => item.s_no === parseInt(id));
    if (city) {
      setInitialData(city);
      setFormTitle("Update City");
      openModal();
    }
  };

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-11/12 pt-10 flex flex-col gap-4">
        <h1 className="text-lg font-medium">Cities</h1>
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
              setFormTitle("Add City");
              openModal();
            }}
          >
            <MdAdd size={20} />
            <button
              className={`primary text-base text-white text-nowrap font-semibold`}
            >
              Add City
            </button>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg flex flex-col p-5 gap-2">
          <CitiesTable onEdit={handleEdit} />
        </div>
        <Pagination />
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
        title={formTitle}
      >
        <CitiesForm initialData={initialData} />
      </CustomModal>
    </div>
  );
}

export default AdminCities;

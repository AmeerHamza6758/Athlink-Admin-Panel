import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import useModal from "../../../helpers/hooks/useModal"; 
import ReusableQuillEditor from "../../../components/text-editor/ReusableQuillEditor";
import Modal from "../../../components/text-editor/Modal"; 

const TermsAndConditions = () => {
  const { isOpen, openModal, closeModal, initialData } = useModal();
  const [title, setTitle] = useState("Terms & Conditions");
  const [content, setContent] = useState(`
    Welcome to CompanyName! These terms and conditions outline the rules
    and regulations for the use of CompanyName's Website, located at
    www.companyname.com.

    Introduction
    By accessing this website, we assume you accept these terms and
    conditions. Do not continue to use CompanyName if you do not agree to
    take all of the terms and conditions stated on this page.

    Cookies
    We employ the use of cookies. By accessing CompanyName, you agreed to
    use cookies in agreement with the CompanyName's Privacy Policy.

    License
    Unless otherwise stated, CompanyName and/or its licensors own the
    intellectual property rights for all material on CompanyName. All
    intellectual property rights are reserved. You may access this from
    CompanyName for your own personal use subjected to restrictions set in
    these terms and conditions.

    You must not:
    - Republishing material from CompanyName
    - Selling, renting, or sub-licensing material from CompanyName
    - Reproducing, duplicating, or copying material from CompanyName
    - Redistributing content from CompanyName

    User Comments
    This Agreement shall begin on the date hereof. Certain parts of this
    website offer the opportunity for users to post and exchange opinions
    and information in certain areas of the website. CompanyName does not
    filter, edit, publish or review Comments prior to their presence on
    the website. Comments do not reflect the views and opinions of
    CompanyName, its agents, and/or affiliates. Comments reflect the views
    and opinions of the person who posts their views and opinions. To the
    extent permitted by applicable laws, CompanyName shall not be liable
    for the Comments or for any liability, damages, or expenses caused
    and/or suffered as a result of any use of and/or posting of and/or
    appearance of the Comments on this website.

    Hyperlinking to our Content
    The following organizations may link to our Website without prior
    written approval:
    - Government agencies
    - Search engines
  `);

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSaveClick = () => {
    // Handle save logic here
    closeModal();
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full p-6">
      <div className="flex items-center justify-between w-full">
        <p className="text-base font-semibold text-primaryText">{title}</p>
        <div
          onClick={() => openModal(content)}
          className="flex items-center gap-1 justify-center bg-darkGrey py-1 px-2 rounded-lg text-base font-normal hover:font-semibold text-white cursor-pointer"
        >
          <CiEdit size={20} />
          <p>Edit</p>
        </div>
      </div>
      <hr className="w-full mb-4" />
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

export default TermsAndConditions;

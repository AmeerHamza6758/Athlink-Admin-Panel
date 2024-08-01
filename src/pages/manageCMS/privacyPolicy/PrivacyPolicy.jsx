import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import useModal from "../../../helpers/hooks/useModal"; // Adjust the path as needed
import ReusableQuillEditor from "../../../components/text-editor/ReusableQuillEditor";
import Modal from "../../../components/text-editor/Modal"; // Adjust the path as needed

const PrivacyPolicy = () => {
  const { isOpen, openModal, closeModal, initialData } = useModal();
  const [title, setTitle] = useState("Privacy Policy");
  const [content, setContent] = useState(`
    At CompanyName, we are committed to protecting your privacy. This
    Privacy Policy outlines our practices regarding the collection, use, and
    disclosure of your information.

    Information Collection
    - We collect information that you provide to us directly, such as when you
    create an account, update your profile, or interact with our services.
    This information may include your name, email address, and any other
    details you choose to provide.

    Use of Information
    - The information we collect is used to provide, maintain, and improve our
    services. We may use your information to communicate with you, respond
    to your inquiries, and provide customer support. We may also use your
    information for research and analysis to enhance our services.

    Information Sharing
    - We do not share your personal information with third parties except as
    described in this Privacy Policy. We may share your information with
    service providers who assist us in operating our services, conducting
    our business, or servicing you, so long as those parties agree to keep
    this information confidential.

    Security
    - We take the security of your information seriously and implement
    reasonable measures to protect it from unauthorized access, disclosure,
    alteration, and destruction.

    Changes to This Policy
    - We may update this Privacy Policy from time to time. We will notify you
    of any changes by posting the new Privacy Policy on our website. You are
    advised to review this Privacy Policy periodically for any changes.

    If you have any questions about this Privacy Policy, please contact us
    at support@companyname.com.
  `);

  const handleChange = (value) => {
    setContent(value);
  };

  const handleSaveClick = () => {
    // Handle save logic here
    closeModal();
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-base font-semibold text-primaryText">{title}</p>
        <div
          onClick={() => openModal(content)}
          className="flex items-center gap-1 justify-center bg-darkGrey py-1 px-2 rounded-lg text-base font-normal hover:font-semibold text-white cursor-pointer"
        >
          <CiEdit size={20} />
          <p>Edit</p>
        </div>
      </div>
      <hr className="mb-4 w-full" />
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

export default PrivacyPolicy;

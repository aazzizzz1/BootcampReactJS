import React from 'react';

const ModalHeader = ({ onClose, title }) => (
  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    <button
      type="button"
      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
      onClick={onClose}
    >
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Close modal</span>
    </button>
  </div>
);

const ModalInput = ({ label, type, id, placeholder, required }) => (
  <div className="col-span-6 sm:col-span-3">
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <input
      type={type}
      name={id}
      id={id}
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

const ModalFooter = ({ onSubmit, buttonText }) => (
  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
    <button
      type="submit"
      onClick={onSubmit}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {buttonText}
    </button>
  </div>
);

const ModalForm = ({ onSubmit, children }) => (
  <form
    action="#"
    className="relative bg-white rounded-lg shadow dark:bg-gray-700"
    onSubmit={onSubmit}
  >
    {children}
  </form>
);

const EditModal = ({ isOpen, onClose }) => {
  return (
    <div
      id="editUserModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <ModalForm onSubmit={{}}>
          <ModalHeader onClose={onClose} title="Edit user" />
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-6">
              <ModalInput
                label="First Name"
                type="text"
                id="first-name"
                placeholder="Bonnie"
                required
              />
              {/* Other inputs */}
            </div>
          </div>
          <ModalFooter onSubmit={{}} buttonText="Save all" />
        </ModalForm>
      </div>
    </div>
  );
};

export default EditModal;

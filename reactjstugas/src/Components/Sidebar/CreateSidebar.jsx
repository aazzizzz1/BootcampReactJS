import React, {useState} from 'react'

const CreateSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
    <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-64'}`}>
      <div className="p-4">
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? 'Close' : 'Open'} Sidebar
        </button>
      </div>
      {/* Sidebar content here */}
    </div>
  </>
  )
}

export default CreateSidebar
// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Keep importing the CSS file for custom styles
import './index.css'; // Import the Tailwind CSS build

const Sidebar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="mt-[73px] bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
      <ul className="list-none p-0 m-0">
        <li className="py-2 px-4 cursor-pointer">Item 1</li>
        <li className="py-2 px-4 cursor-pointer">Item 2</li>
        <li onClick={toggleDropdown} className="py-2 px-4 cursor-pointer">Dropdown</li>
        {dropdownVisible && (
          <ul className="pl-8">
            <li className="py-2 px-4 cursor-pointer">Subitem 1</li>
            <li className="py-2 px-4 cursor-pointer">Subitem 2</li>
            <li className="py-2 px-4 cursor-pointer">Subitem 3</li>
          </ul>
        )}
        <li className="py-2 px-4 cursor-pointer">Item 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function Dropdowns() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Popularity Descending");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setSortOption(event.target.value);
  };

  const [isChecked, setIsChecked] = useState(false);
    const checkHandleChange = (event) => {
        setIsChecked(event.target.checked);
}
  return (
    <>
    <div style={{padding:"20px"}}>
        <div style={{color:"#b53febff", fontWeight:"bold", fontFamily:"monospace", fontSize:"24px"}}>
            <h1>Popular Series to watch</h1>
        </div>
        <br />
        <div className="w-64 border rounded-2xl shadow-sm bg-white">
        <button
            onClick={toggleDropdown}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg"
        >
            Sort
            {isOpen ? <ChevronDown /> : <ChevronRight />}
        </button>
        {isOpen && (
            <div className="p-4 border-t">
            <label className="block text-sm text-gray-600 mb-1">Sort Results By</label>
            <select
                value={sortOption}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-400 bg-gray-100"
            >
                <option>Popularity Descending</option>
                <option>Popularity Ascending</option>
                <option>Rating Descending</option>
                <option>Rating Ascending</option>
                <option>Release Date Descending</option>
                <option>Release Date Ascending</option>
            </select>
        </div>
        )}
        </div>
        <br />
        <div className="w-64 border rounded-2xl shadow-sm bg-white">
        <button
            onClick={toggleDropdown}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg"
        >
            Where to watch
            {isOpen ? <ChevronDown /> : <ChevronRight />}
        </button>
        {isOpen && (
            <div className="p-4 border-t">
                <label className="block text-sm text-gray-600 mb-1">My services</label>
                <br />
                <label><input type="checkbox" checked={isChecked} onChange={checkHandleChange} /> Restricts searches to my subscibed services?</label>
                <br />
                <br />
                <label className="block text-sm text-gray-600 mb-1">Country</label>
            <select
                value={sortOption}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-400 bg-gray-100"
            >
                <option>India</option>
                <option>America</option>
                <option>Ukraine</option>
                <option>Africa</option>
                <option>Iceland</option>
                <option>Portugal</option>
            </select>
        </div>
        )}
        </div>
    </div>
    </>
  );
}
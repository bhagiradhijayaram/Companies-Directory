import { useState, useEffect } from "react";

const Filters = ({ companyData, onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const uniqueLocations = [...new Set(companyData.map((c) => c.location))];
  const uniqueIndustries = [...new Set(companyData.map((c) => c.industry))];

  useEffect(() => {
    onFilterChange({ search, location, industry, sortOrder });
  }, [search, location, industry, sortOrder]);

  const handleClear = () => {
    setSearch("");
    setLocation("");
    setIndustry("");
    setSortOrder("asc");
  };

  return (
    <section className="py-6 px-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Search & Filter</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <label htmlFor="search" className="mb-2 font-semibold">
            Search by Name, Industry, or Location
          </label>
          <input
            type="text"
            id="search"
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter company name, industry, or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="mb-2 font-semibold">
            Location
          </label>
          <select
            id="location"
            className="p-2 border border-gray-300 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="industry" className="mb-2 font-semibold">
            Industry
          </label>
          <select
            id="industry"
            className="p-2 border border-gray-300 rounded"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="">All Industries</option>
            {uniqueIndustries.map((ind, index) => (
              <option key={index} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="sortOrder" className="mb-2 font-semibold">
            Sort Order
          </label>
          <select
            id="sortOrder"
            className="p-2 border border-gray-300 rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending (A–Z)</option>
            <option value="desc">Descending (Z–A)</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
};

export default Filters;

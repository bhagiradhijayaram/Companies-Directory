import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import CompanyCard from "../components/CompanyCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import CompanyTable from "../components/CompanyTable";

const Home = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/companies.json");
      if (!response.ok) {
        throw new Error("Failed to fetch company data");
      }
      const data = await response.json();
      console.log("Fetched Companies:", data);
      setCompanies(data);
    } catch (err) {
      console.error("Error fetching companies:", err);
      setError("Something went wrong while fetching companies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
    return () => {
      setCompanies([]);
      setLoading(false);
    };
  }, []);

  // filtering logic here
  const filteredCompanies = companies
    .filter((c) =>
      filters.search
        ? c.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          c.industry.toLowerCase().includes(filters.search.toLowerCase()) ||
          c.location.toLowerCase().includes(filters.search.toLowerCase())
        : true
    )
    .filter((c) => (filters.location ? c.location === filters.location : true))
    .filter((c) => (filters.industry ? c.industry === filters.industry : true))
    .sort((a, b) =>
      filters.sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCompanies = filteredCompanies.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters.search, filters.location, filters.industry, filters.sortOrder]);

  return (
    <main>
      <Header />
      <section className="w-full max-w-[1350px] mx-auto px-4 mt-30">
        <div className="my-8 space-y-2">
          <h1 className="text-3xl font-semibold">Explore Companies</h1>
          <p>
            Discover and connect with leading companies across various
            industries
          </p>
        </div>
        <Filters companyData={companies} onFilterChange={setFilters} />
        <section>
          {loading ? (
            <Loader />
          ) : error ? (
            <div className="flex justify-center items-center h-[40vh]">
              <p className="text-red-600 font-medium">{error}</p>
            </div>
          ) : paginatedCompanies.length > 0 ? (
            <div className="my-6">
              <div className="block lg:hidden">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {paginatedCompanies.map((company) => (
                    <CompanyCard companyInfo={company} key={company.id} />
                  ))}
                </ul>
              </div>

              <div className="hidden lg:block">
                <CompanyTable companies={paginatedCompanies} />
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-[40vh]">
              <p className="text-gray-600 text-lg">No companies found</p>
            </div>
          )}
        </section>

        <div className="mb-5 text-right">
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;

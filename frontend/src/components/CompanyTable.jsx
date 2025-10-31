import { CiLocationOn, CiGlobe } from "react-icons/ci";

const CompanyTable = ({ companies }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200 bg-white">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-blue-300/10 text-gray-800 text-sm font-semibold border-b border-gray-200">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Company Name</th>
            <th className="px-6 py-3">Industry</th>
            <th className="px-6 py-3">Location</th>
            <th className="px-6 py-3">Website</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr
              key={company.id}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-blue-50 transition-all duration-200`}
            >
              <td className="px-6 py-3">{index + 1}</td>
              <td className="px-6 py-3 font-medium text-gray-900">
                {company.name}
              </td>
              <td className="px-6 py-3">{company.industry}</td>
              <td className="px-6 py-3">
                <div className="flex items-center text-gray-700 gap-1">
                  <CiLocationOn size={16} />
                  <span>{company.location || "N/A"}</span>
                </div>
              </td>

              <td className="px-6 py-3 flex items-center gap-1">
                <CiGlobe />
                <a
                  href={company.website}
                  className="hover:underline hover:text-gray-800"
                  target="_blank"
                >
                  Visit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;

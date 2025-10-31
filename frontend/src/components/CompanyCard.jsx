import { LuBuilding2 } from "react-icons/lu";
import { CiLocationOn, CiGlobe } from "react-icons/ci";

const CompanyCard = ({ companyInfo }) => {
  const { name, location, website, industry } = companyInfo;
  return (
    <>
      <li className="bg-white p-4 border border-gray-200 shadow space-y-2">
        <div className="flex items-center gap-2">
          <div className="bg-blue-400/30 w-10 h-10 flex flex-col justify-center items-center rounded">
            <LuBuilding2 size={25} color="" />
          </div>
          <h2>{name}</h2>
        </div>
        <p className="bg-blue-400/10 px-2 py-1 text-sm rounded-md w-fit">
          {industry}
        </p>
        <div className="flex items-center gap-1">
          <CiLocationOn size={18} />
          <p>{location}</p>
        </div>
        <div className="flex items-center gap-1">
          <CiGlobe size={18} />
          <a href={website} className="text-md">
            Website
          </a>
        </div>
      </li>
    </>
  );
};

export default CompanyCard;

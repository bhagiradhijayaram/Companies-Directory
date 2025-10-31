import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <TailSpin height="50" width="50" color="#0b69ff" ariaLabel="loading" />
    </div>
  );
}

import { useParams } from "react-router-dom";
import KoansList from "../components/KoansList";

const KoansPage = () => {
  const { workshop } = useParams();

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-[#e8f5e9] p-8 lg:ml-64">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {workshop.replace("-", " ")} Koans
      </h1>

      {/* Pass the param to your KoansList */}
      <KoansList workshop={workshop} />
    </div>
  );
};

export default KoansPage;

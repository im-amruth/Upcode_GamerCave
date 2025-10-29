import KoanCard from "./KoansCard";
import { koans } from "../data/koans";

const KoansList = ({ workshop }) => {
  const koansData = koans[workshop] || [];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {koansData.map((koan, i) => (
        <KoanCard
          key={i}
          title={koan.title}
          description={koan.description}
          difficulty={koan.difficulty}
          path={`/workshop/${workshop}/${koan.id}`}
        />
      ))}
    </div>
  );
};

export default KoansList;

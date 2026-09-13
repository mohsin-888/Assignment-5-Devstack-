interface Technology {
 id: string;
 name: string;
 category: string;
description: string;
 icon: string;
rating: number;
 difficulty: string;
 badge: string;
}

interface TechnologyCardProps {
 technology: Technology;
 onAdd: (technology: Technology) => void;
isAdded: boolean;
}
const TechnologyCard = ({
  technology,
  onAdd,
  isAdded
}: TechnologyCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md">

      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs text-pink-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="rounded bg-gray-100 px-2 py-1">
          {technology.category}
        </span>

        <span>{technology.difficulty}</span>

        <span>⭐ {technology.rating}</span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-3 text-white ${
          isAdded ? "bg-gray-400" : "bg-gray-900"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;
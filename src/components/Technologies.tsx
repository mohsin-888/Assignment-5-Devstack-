import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import NewStack from "./NewStack";
import { toast } from "react-toastify";

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

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTech, setSelectedTech] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAdd = (technology: Technology) => {
    const found = selectedTech.find(
      (item) => item.id === technology.id
    );

    if (found) {
     toast.warning("Already Added");
      return;
    }

    setSelectedTech([...selectedTech, technology]);
  };

  const handleRemove = (id: string) => {
    const remaining = selectedTech.filter(
      (item) => item.id !== id
    );

    setSelectedTech(remaining);
  };

  const handleRemoveAll = () => {
    setSelectedTech([]);
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <section
  id="technologies"
  className="mx-auto max-w-7xl px-6 py-16"
>
      <h2 className="text-3xl font-bold">
        Explore the{" "}
        <span className="text-pink-500">Technologies</span>
      </h2>

      <p className="mt-2 text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

    <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              technology={tech}
              onAdd={handleAdd}
            />
          ))}
        </div>

        <NewStack
          selectedTech={selectedTech}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />

      </div>
    </section>
  );
};

export default Technologies;
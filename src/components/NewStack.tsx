interface Technology {
  id: string;
  name: string;
  category: string;
  icon: string;
}

interface NewStackProps {
  selectedTech: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () =>void;
}

const NewStack = ({
  selectedTech,
  onRemove,
  onRemoveAll
}: NewStackProps) => {
  return (
    <div className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

      <h3 className="text-xl font-bold">
      
         Your Stack
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        {selectedTech.length} Technology Selected
      </p>




      {selectedTech.length === 0 ?(
        <div className="mt-5 rounded-lg border border-dashed border-pink-200 p-8 text-center text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-3">


            {selectedTech.map((tech)=>(
              <div
                key={tech.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >

                <div className="flex items-center gap-3">
                  <img
              src={tech.icon}
              alt={tech.name}
                    className="h-8 w-8"
             />





                  <div>
                    <h4 className="font-semibold">
                      {tech.name}
                    </h4>

                    <p className="text-xs text-gray-400">
                      {tech.category}
                    </p>
                  </div>
                </div>




                <button
                  onClick={()=>onRemove(tech.id)}
                  className="text-xl text-red-500"
                >
                  ×

                </button>


              </div>
            ))}

          </div>

          <button

            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg bg-pink-300 py-2 text-black-900 hover:bg-pink-400"
          >
            Remove All
          </button>
        </>
      )}

    </div>
  );
};

export default NewStack;
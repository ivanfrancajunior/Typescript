import React from "react";
interface Item {
  title: string;
  description: string;
}

const ListItems = () => {
  const items: Item[] = [
    { title: "Title 1", description: "desc 1" },
    { title: "Title 2", description: "desc 2" },
    { title: "Title 3", description: "desc 3" },
    { title: "Title 4", description: "desc 4" },
    { title: "Title 5", description: "desc 5" },
  ];
  return (
    <div>
      {items &&
        items.map((i) => (
          <div
            key={i.title}
            className="flex gap-5 p-2 bg-purple-50 my-1 rounded-md  text-zinc-800 hover:bg-purple-800 transition from-purple-300 hover:text-black"
          >
            <h2>{i.title}</h2>
            <p>{i.description}</p>
          </div>
        ))}
    </div>
  );
};

export default ListItems;

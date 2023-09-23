interface ChildProps {
  name: string;
  lastName: string;
  age: number;
  sick: boolean;
}

export const Child: React.FC<ChildProps> = ({ name, lastName, age, sick }) => {
  return (
    <div className="flex items-center justify-center flex-col p-5 gap-2 bg-[#1f1f1f] rounded mx-2 shadow-md shadow-pink-600 hover:shadow-orange-800 transition duration-700 ">
      <h2>
        {name} <span>{lastName}</span>{" "}
      </h2>
      <h2>{age}</h2>
      <h2>{sick ? "🤮" : "😎"}</h2>
    </div>
  );
};

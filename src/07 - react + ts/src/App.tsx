import Parent from "./props/Parent";
import States from "./states/States";

function App() {
  return (
    <>
      <h2 className="text-center p-2 my-5">PROPS</h2>
      <section className="flex items-center justify-center p-5 bg-[#1a1a1a] shadow-sm hover:shadow hover:shadow-[#ed7355] hover:text-white transition duration-500 shadow-[#bcac8f] mb-5">
        <div></div>

        <Parent />
      </section>
      <h2 className="text-center p-2 mb-5">states</h2>
      <section className="flex items-center justify-center p-5 bg-[#1a1a1a] shadow-sm hover:shadow hover:shadow-[#ed7355] hover:text-white transition duration-500 shadow-[#bcac8f] mb-5">
        <States/>
      </section>
    </>
  );
}

export default App;

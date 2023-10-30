import Button from "./props/Button";
import FormularioContato from "./props/FormularioContato";
import ListItems from "./props/ListItems";

function App() {
  return (
    <>
      <h2 className="text-center p-2 my-5">PROPS</h2>
      <section className="flex items-center justify-center p-5 bg-[#1a1a1a] shadow-sm hover:shadow hover:shadow-[#ed7355] hover:text-white transition duration-500 shadow-[#bcac8f] mb-5">
        <Button variant={"secondary"} />
      </section>
      <section className="flex items-center justify-center p-5 bg-[#1a1a1a] shadow-sm hover:shadow hover:shadow-[#ed7355] hover:text-white transition duration-500 shadow-[#bcac8f] mb-5">
        <ListItems />
      </section>
      <section className="flex items-center justify-center p-5 bg-[#1a1a1a] shadow-sm hover:shadow hover:shadow-[#ed7355] hover:text-white transition duration-500 shadow-[#bcac8f] mb-5">
        <FormularioContato
          nome="Zuzuba"
          email="zZuzuba@email.com"
          desc="some desc."
        />
      </section>
    </>
  );
}

export default App;

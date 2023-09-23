import { Child } from "./Child";

export const Parent = () => {
  return (
    <>
      <Child name="Jora" lastName="Apenas" age={30} sick={false} />
      <Child name="mrlon" lastName="Brando" age={60} sick={false} />
      <Child name="Eri" lastName="sabeta" age={90} sick={false} />
    
    </>
  );
};
export default Parent;

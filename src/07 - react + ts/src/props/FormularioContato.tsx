interface FormProps {
  nome: string;
  email: string;
  desc: string;
}
const FormularioContato = ({ nome, email, desc }: FormProps) => {
  return (
    <div>
      <h2>{nome}</h2>
      <h2>{email}</h2>
      <h2>{desc}</h2>
    </div>
  );
};

export default FormularioContato;

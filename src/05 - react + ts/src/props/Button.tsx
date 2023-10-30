interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
}

const Button = ({ variant }: ButtonProps) => {

    const handleStyle = (colorType: string) => {
    let backgroundColor;
    if (colorType === "primary") {
      backgroundColor = "blue";
    } else if (colorType === "secundary") {
      backgroundColor = "purple";
    } else {
      backgroundColor = "red";
    }
    return { backgroundColor };
  };
  
  const { backgroundColor } = handleStyle(variant);

  return <button className="p-2 rounded-md text-white font-extrabold " style={{ backgroundColor }}>Button</button>;

};

export default Button;

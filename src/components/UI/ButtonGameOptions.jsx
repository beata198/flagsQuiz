import CardWrapper from "./CardWrapper";

const Button = ({
  onClick,
  value,
  isSelected,
  children,
  onMouseEnter,
  onMouseLeave,
}) => {
  const classesButton =
    "flex items-center flex-col gap-5 uppercase text-sm hover:text-default font-semibold py-6 px-4 w-full rounded-md hover:bg-cardHover  ";

  return (
    <CardWrapper>
      <button
        className={`${classesButton} ${classesButton} ${
          isSelected ? "bg-cardHover text-default" : ""
        }`}
        onClick={() => onClick(value)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children ? children : value}
      </button>
    </CardWrapper>
  );
};

export default Button;

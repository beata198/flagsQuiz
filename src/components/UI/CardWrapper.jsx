const CardWrapper = ({ children, classes, ...props }) => {
  return (
    <div
      className={`border border-card shadow-custom rounded-md ${
        classes ? classes : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardWrapper;

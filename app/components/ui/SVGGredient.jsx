const SVGGredient = ({ className, ...props }) => {
  return (
    <>
      <span
        className={`flex bg-gradient-to-r from-pB via-pM to-pY ${className}`}
      />
    </>
  );
};

export default SVGGredient;

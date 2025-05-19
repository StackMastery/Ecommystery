const SVGGredient = ({ className, ...props }) => {
  return (
    <>
      <span
        style={{
          background: `linear-gradient(91deg, #226FFF -5.68%, #DE22FF 54.52%, #FFE11B 114.72%)`,
        }}
        className={`flex  ${className}`}
      />
    </>
  );
};

export default SVGGredient;

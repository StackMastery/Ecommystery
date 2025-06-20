/*
	Installed from https://reactbits.dev/default/
*/

import "./GradientText.css";

export default function GradientText({
  overLayClass = "",
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"], // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text !rounded-full ${className}`}>
      {showBorder && (
        <div
          className={`gradient-overlay ${overLayClass}`}
          style={gradientStyle}
        ></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}

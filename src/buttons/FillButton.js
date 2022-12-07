import PropTypes from "prop-types";

export default function FillButton ({color, elevate, onPress, text, corner, style, icon, iconPosition}) {

  function getClassName () {
    let colorCss = color === "success" ? "bg-success active:bg-success-dark" 
      : color === "warning" ? "bg-warning active:bg-warning-dark" 
      : color === "danger" ? "bg-danger active:bg-danger-dark" 
      : color === "cancel" ? "bg-cancel active:bg-cancel-dark" 
      : "bg-info active:bg-info-dark";
    
    let cornerCss = corner === "rounded" ? "rounded"
      : corner === "rounded-full" ? "rounded-full"
      : "";

    let elevateCss = elevate ? "shadow-lg" : "";

    let className = `text-white px-4 py-2 transition ${colorCss} ${cornerCss} ${elevateCss}`;

    return className;
  }

  return(
    <button
      className={getClassName() + " " + style}
      onClick={onPress}
    >
      {
        icon ? (
          iconPosition === "left" ? (
            <span className={text ? "mr-2" : ""}>
              {icon}
            </span>
          ) : 
          iconPosition === "top" ? (
            <div>
              {icon}
            </div>
          ) : null
        ) : null
      }

      {text}

      {
        icon ? (
          iconPosition === "right" ? (
            <span className={text ? "ml-2" : ""}>
              {icon}
            </span>
          ) : 
          iconPosition === "bottom" ? (
            <div>
              {icon}
            </div>
          ) : null
        ) : null
      }
    </button>
  )
}

FillButton.defaultProps = {
  color: "info",
  corner: "default",
  elevate: false,
  onPress: () => {},
  style: "",
  iconPosition: "left"
}

FillButton.propTypes = {
  color: PropTypes.oneOf(["default", "success", "danger", "warning", "info"]),
  corner: PropTypes.oneOf(["default", "rounded", "rounded-full"]),
  elevate: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.string,
  icon: PropTypes.any,
  iconPosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),
}
import PropTypes from "prop-types";
import './btn-loading.css';

export default function LoadingButton ({color, elevate, onPress, text, corner, style, icon, iconPosition, loading}) {

  function getClassName () {

    let colorCss = color === "success" ? "border-success active:border-success-dark text-success active:text-success-dark" 
      : color === "warning" ? "border-warning active:border-warning-dark text-warning active:text-warning-dark" 
      : color === "danger" ? "border-danger active:border-danger-dark text-danger active:text-danger-dark" 
      : color === "cancel" ? "border-cancel active:border-cancel-dark text-cancel active:text-cancel-dark" 
      : "border-info active:border-info-dark text-info active:text-info-dark";
    
    let cornerCss = corner === "rounded" ? "rounded"
      : corner === "rounded-full" ? "rounded-full"
      : "";

    let elevateCss = elevate ? "shadow-lg" : "";

    let className = `px-4 py-2 transition border ${colorCss} ${cornerCss} ${elevateCss}`;

    return className;
  }

  if(loading) {
    return (
      <button
        className={getClassName() + " opacity-50 " + style}
        disabled
      >
        <div className="btn-loading">
          <div className="bg-info"></div>
          <div className="bg-info"></div>
          <div className="bg-info"></div>
        </div>
      </button>
    )
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

LoadingButton.defaultProps = {
  color: "info",
  corner: "default",
  elevate: false,
  onPress: () => {},
  style: "",
  iconPosition: "left",
}

LoadingButton.propTypes = {
  color: PropTypes.oneOf(["default", "success", "danger", "warning", "info"]),
  corner: PropTypes.oneOf(["default", "rounded", "rounded-full"]),
  elevate: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.string,
  icon: PropTypes.any,
  iconPosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  loading: PropTypes.bool,
}
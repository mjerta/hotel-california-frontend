import "./Button.css"
import "./Variants.css"

function Button({className, onClick, text, children, disabled, tabIndex}) {
  return (
    <button
      tabIndex={tabIndex}
      className={`button ${className ? ` ${className}` : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {
        children ? (
            <>
              {children}
            </>
          )
          :
          (
            <>
              {text}
            </>
          )
      }
    </button>
  )
}
export default Button;
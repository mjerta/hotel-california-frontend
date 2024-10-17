import "./Button.css"
import "./Variants.css"

function Button({className, onClick, text, children}) {
  return (
    <button
      className={`button ${className ? ` ${className}` : ''}`}
      onClick={onClick}
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
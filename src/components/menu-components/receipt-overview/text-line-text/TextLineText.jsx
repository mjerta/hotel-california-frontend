import "./TextLineText.css"
function TextLineText({className, priceFirstText, priceSecondText, spanTextOne, spanTextTwo}) {
  return (
    <div className={`text-line-text ${className ? className : ''}`}>
      <div className={"text"}>
        <span>{spanTextOne}</span>
        <span>{priceFirstText}</span>
      </div>
      <hr className="divider"/>
      <div className={"text"}>
        <span>{spanTextTwo}</span>
        <span>{priceSecondText}</span>
      </div>
    </div>
  )
}

export default TextLineText;
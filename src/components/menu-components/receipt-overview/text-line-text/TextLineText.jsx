import "./TextLineText.css"
function TextLineText({className, priceFirstText, priceSecondText}) {
  return (
    <div className={`text-line-text ${className ? className : ''}`}>
      <div className={"text"}>
        <span>Sub total:</span>
        <span>{priceFirstText}</span>
      </div>
      <hr className="divider"/>
      <div className={"text"}>
        <span>With tax:</span>
        <span>{priceSecondText}</span>
      </div>
    </div>
  )
}

export default TextLineText;
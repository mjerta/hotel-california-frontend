import "./FoodMenuOverview.css"
import Card from "../../general-components/card/Card.jsx";
function FoodMenuOverview({className}) {
  return (
    <>
      <section className={`card-overview${className ? className: ''}`}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </section>
    </>
  )
}

export default FoodMenuOverview;
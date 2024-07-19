import "./Card.css";
function Card(props) {
  return (
    <div className={`Card ${props.Border}`}>
      <div className="SubTitle">
        <h2>{props.Title}</h2>
        <p>{props.Description}</p>
      </div>
      <img src={props.Icon} alt="card icon" />
    </div>
  );
}
export default Card;

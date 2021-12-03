export default function Subpage(props) {
  return (
    <div className="subpageTop">
      <div className="subpageTopItem">
        <img src={props.image} alt="" />
        <div className="subpageTopItemText">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  );
}

import { useSelector } from "react-redux";

function DetailPage(props) {
  let a = useSelector((state) => state.coatItems);

  return (
    <div>
      <div className="nav">
        <h4>Detail</h4>
      </div>
      <ul style={{ marginTop: "40px" }}>
        <li>
          <img src={a[props.id].img} width="400px" />
        </li>
        <li className="subTitle">{a[props.id].name}</li>
        <li>{a[props.id].price}</li>
      </ul>
    </div>
  );
}
export default DetailPage;

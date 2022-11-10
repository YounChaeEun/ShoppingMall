import { useSelector } from "react-redux";

function DetailPage(props) {
  const a = useSelector((state) => state.coatItems);

  return (
    <div className="detailWrap">
      <div className="nav">
        <h4>Detail</h4>
      </div>
      <ul>
        <li>
          <img src={a[props.id].img} width="400px" />
        </li>
        <div className="subTitle">
          <li>{a[props.id].name}</li>
          <li>{a[props.id].price}</li>
        </div>
      </ul>
    </div>
  );
}
export default DetailPage;

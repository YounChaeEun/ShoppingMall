import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addReview } from "./../store.js";

function ReviewPage() {
  let [value, setValue] = useState("");
  let dispatch = useDispatch();
  let a = useSelector((state) => state.reviewList);

  return (
    <div>
      <div className="nav">
        <h4>Review</h4>
      </div>
      <div>
        {a &&
          a.map(function (c, i) {
            return (
              <div className="list" key={i}>
                {a[i]}
              </div>
            );
          })}
      </div>
      <input
        type="text"
        placeholder=""
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      ></input>
      <button
        className="button"
        onClick={() => {
          dispatch(addReview(value));
          setValue("");
        }}
      >
        Write
      </button>
    </div>
  );
}

export default ReviewPage;

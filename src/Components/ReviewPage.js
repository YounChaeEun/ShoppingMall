import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addReview, removeReview } from "./../store.js";
import { FaRegWindowClose, FaPlus } from "react-icons/fa";

function ReviewPage() {
  let [value, setValue] = useState("");
  const dispatch = useDispatch();
  const reviewList = useSelector((state) => state.reviewList);

  return (
    <div>
      <div className="nav">
        <h4>Review</h4>
      </div>
      <div>
        {reviewList.map(function (a, i) {
          return (
            <div className="list" key={a.id}>
              {reviewList[i]}
              <button
                className="removeButton"
                onClick={() => {
                  dispatch(removeReview(i));
                }}
              >
                <FaRegWindowClose />
              </button>
            </div>
          );
        })}
      </div>
      <div className="ReviewPageBottom">
        <textarea
          placeholder=""
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        ></textarea>
        <button
          className="writeButton"
          onClick={() => {
            dispatch(addReview(value));
            setValue("");
          }}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default ReviewPage;

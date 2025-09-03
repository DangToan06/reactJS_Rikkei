import React, { useState } from "react";

export default function Feedback() {
  const [scores, setScores] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  const [scoreValue, setScoreValue] = useState<number>(0);

  const handleGetScore = (score: number) => {
    setScoreValue(score);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">Feedback TA</div>
      <div className="feedback-body">
        <div className="feedback-input">
          <h3 className="feedback-input-heading">
            Thầy Phú dạy có hay không???
          </h3>
          <div className="btn-score-group">
            {scores.map((e) => {
              return (
                <button
                  className={`btn-score ${scoreValue === e ? "active" : ""}`}
                  onClick={() => handleGetScore(e)}
                >
                  {e}
                </button>
              );
            })}
          </div>
          <div className="input-container">
            <input
              id="feedbackInput"
              placeholder="Nhập nội dung feedback"
              type="text"
              className="input"
            />
            <button className="btn-send">Send</button>
          </div>
          <p className="error">Nội dung phải ít nhất 10 ký tự</p>
        </div>
        <div className="range-container">
          <div className="count-review">
            <span className="review-number"></span> reviews
          </div>
          <div className="average-rate">
            <span>Average rating:</span>
            <span className="average-number"></span>
          </div>
        </div>

        <div className="list-feedback-content"></div>
      </div>
    </div>
  );
}

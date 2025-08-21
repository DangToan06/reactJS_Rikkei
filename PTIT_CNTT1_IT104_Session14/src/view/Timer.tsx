import React, { Component } from "react";
import "./timer.css";

type StateType = {
  time: number;
  isRunning: boolean;
};

export default class Timer extends Component<object, StateType> {
  timerId: ReturnType<typeof setInterval> | number | undefined = undefined;
  constructor(props: object) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
    };
  }

  componentDidMount(): void {
    console.log("Component đã được mout vào trong DOM");
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  render() {
    const handleStart = () => {
      setInterval(() => {
        this.setState({
          time: this.state.time + 1,
          isRunning: true,
        });
      }, 1000);
    };

    const handlePause = () => {
      clearInterval(this.timerId);
    };

    const formatTime = (seconds: number): string => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const handleReset = () => {
      this.setState({
        time: 0,
        isRunning: false,
      });
    };

    return (
      <>
        <div className="timer-container">
          <div className="timer-header">
            <h1 className="timer-title">Đồng Hồ Đếm Thời Gian</h1>
          </div>
          <div className="mode-selector">
            <button className="mode-btn active" data-mode="stopwatch">
              Bấm Giờ
            </button>
          </div>
          <div className="time-display" id="timeDisplay">
            {formatTime(this.state.time)}
          </div>
          <div className="progress-bar">
            <div className="progress-fill" id="progressFill" />
          </div>
          <div className="controls">
            {this.state.isRunning ? (
              <button
                className="control-btn pause-btn"
                id="pauseBtn"
                onClick={handlePause}
              >
                Tạm Dừng
              </button>
            ) : (
              <button
                className="control-btn start-btn"
                id="startBtn"
                onClick={handleStart}
              >
                Bắt Đầu
              </button>
            )}

            <button
              className="control-btn reset-btn"
              id="resetBtn"
              onClick={handleReset}
            >
              Đặt Lại
            </button>
          </div>
          <div className="status-message" id="statusMessage" />
        </div>
      </>
    );
  }
}

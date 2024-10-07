import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const initialValue = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const val = localStorage.getItem("feedbackValue");
    const parsedVal = JSON.parse(val) ?? initialValue;

    return parsedVal;
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const resetValue = () => {
    setFeedbacks(initialValue);
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  useEffect(() => {
    const stringifiedValue = JSON.stringify(feedbacks);
    localStorage.setItem("feedbackValue", stringifiedValue);
  }, [feedbacks]);

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetValue={resetValue} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedbacks} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;

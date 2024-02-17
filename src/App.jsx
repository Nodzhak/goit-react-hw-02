import { useEffect, useState } from 'react'
import './App.css'
import Feedback from './components/Feedback/Feedback.jsx'
import Options from './components/Options/Options.jsx'
import Description from './components/Description/Description.jsx'
import Notification from './components/Notification/Notification.jsx'


export default function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const saveLS = window.localStorage.getItem("save-LS");
    if (saveLS !== null) {
      return JSON.parse(saveLS);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("save-LS", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

const updateFeedback = (feedbackType) => {
  if (feedbackType === "reset") {
    setFeedbackTypes({ good: 0, neutral: 0, bad: 0 });
  } else {
    setFeedbackTypes((prevFeedbackTypes) => ({
      ...prevFeedbackTypes,
      [feedbackType]: prevFeedbackTypes[feedbackType] + 1,
    }));
  }
};

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const sumTotalFeedback = Math.round(((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (<Notification />) :
      <Feedback
        feedbackTypes={feedbackTypes}
        totalFeedback={totalFeedback}
        sumTotalFeedback={sumTotalFeedback}
      />}
    </div>
  );
}

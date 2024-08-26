import React, { useEffect, useState } from 'react';
import './Summary.css'; // Ensure this CSS file exists for styling
import smmary from "../QuizAssets/Summary.json";

export default function Summary() {
  const [summaryText, setSummaryText] = useState('');

  useEffect(() => {
    // Directly set the summary text from the imported JSON file
    setSummaryText(smmary.summary);
  }, []);

  return (
    <div className="summaryContainer">
      <h2 className="summaryLabel">Summary</h2>
      <p className="summaryText">{summaryText}</p>
    </div>
  );
}

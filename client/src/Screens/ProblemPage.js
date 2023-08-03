import React, { useEffect, useState } from "react";
import axios from 'axios';

const ProblemPage = () => {
  const [problem, setProblem] = useState({
    name: "",
    nos: 0,
    statement: ""
  });

  const [showProblem, setShowProblem] = useState(false);

  const fetchProblem = async () => {
    try {
      const res = await axios.get("http://localhost:5000/displayProblem");
      setProblem({
        name: res.data.pName,
        nos: res.data.pNo,
        statement: res.data.pStatement
      });
      setShowProblem(true);
    } catch (error) {
      console.error("Error fetching problem:", error);
    }
  };

  useEffect(() => {
    fetchProblem();
  }, []);

  return (
    <div>
      <button onClick={fetchProblem}>Fetch Problem</button>
      {showProblem ? (
        <div>
          <h2>{problem.name}</h2>
          <p>{problem.nos}</p>
          <p>{problem.statement}</p>
        </div>
      ) : (
        <p>Click "Fetch Problem" to load a problem.</p>
      )}
    </div>
  );
};

export default ProblemPage;

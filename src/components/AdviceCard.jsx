import React, { useEffect, useState } from "react";

const AdviceCard = () => {
  const [text, setText] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const fetchData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setText(data);
  };

  useEffect(() => {
    fetchData();
  }, [trigger]);
  return (
    <div className="card">
      {text ? (
        <div className="text-content">
          <h3>Advice # {text.slip.id}</h3>
          <q>{text.slip.advice}</q>
        </div>
      ) : (
        <div className="loading">loading....</div>
      )}
      <hr />
      <div className="pause">
        <i className="fa-solid fa-pause"></i>
      </div>
      <button
        onClick={() => {
          setTrigger(!trigger);
        }}
      >
        <i className="fa-solid fa-dice-four"></i>
      </button>
    </div>
  );
};

export default AdviceCard;

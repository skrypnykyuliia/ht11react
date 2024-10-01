import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoHomeButton = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');  
  };

  return (
    <div>
      <button onClick={goToHomePage}>На главную</button>
    </div>
  );
};

export default GoHomeButton;

import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
 
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  let playerName = isEditing ? <input type="text" required/> : <span className="player-name">{name}</span>
   

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
};

export default Player;

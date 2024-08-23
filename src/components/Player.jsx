import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
 
  const handleEditClick = () => {
    setIsEditing(editing => !editing);
  };

  let playerName = <span className="player-name">{name}</span>

  if(isEditing) {
    playerName = <input value = {name} type="text" required/>
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing? "Save" :"Edit"}</button>
    </li>
  );
};

export default Player;

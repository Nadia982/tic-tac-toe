import { useState } from "react";

const Player = ({ initialName, symbol }) => {

  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);
 
  const handleEditClick = () => {
    setIsEditing(editing => !editing);
  };

const handleChange = (e) => {
    setPlayerName(e.target.value);
}

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if(isEditing) {
    editablePlayerName = <input value = {playerName} type="text" required onChange={handleChange}/>
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing? "Save" :"Edit"}</button>
    </li>
  );
};

export default Player;

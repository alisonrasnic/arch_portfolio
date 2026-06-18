import { useState } from 'react';

import './DesktopIcon.css';

const DesktopIcon = (props) => {
  const [title, setTitle] = useState(props.title);
  const [pos, setPos] = useState([props.x, props.y]);
  return (
    <div className="DesktopIcon" style={{left: `${pos[0]}px`, top: `${pos[1]}px`}}>

      <div className="DesktopIconImage">
        <img className="DesktopIconImage" src="https://invent.kde.org/frameworks/breeze-icons/-/raw/master/icons/apps/64/utilities-terminal.svg?ref_type=heads" />
      </div>

      <p>{title}</p>
    </div>
  )
};

export {DesktopIcon};

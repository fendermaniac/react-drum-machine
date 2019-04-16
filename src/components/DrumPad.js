import React from 'react';

const DrumPad = ({track, handleClick, kbdKey, audio}) => {
  return ( 
    <div className="drum-pad" id={track} onClick={handleClick}>
    {kbdKey}
    <audio className="clip" id={kbdKey} src={audio} />
  </div>
   );
}
 
export default DrumPad;
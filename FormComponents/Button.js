import React from 'react'

const Button = ({val, buttonClass}) => {
    console.log(val);
  return (
    <>
      <input type="submit" value={val} id="submit" className={buttonClass} />
    </>
  );
};

export{ Button}

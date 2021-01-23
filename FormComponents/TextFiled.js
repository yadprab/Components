import React from 'react'

const TextFiled=({label, type})=> {
    return (
      <>
        <section className="form--control">
          <label htmlFor={label}>{label}</label>
          <input type={type} id={label} name={label} />
        </section>
      </>
    );
}

export { TextFiled}

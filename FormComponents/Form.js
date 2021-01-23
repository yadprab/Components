import React from "react";
import { TextFiled } from "./TextFiled";
import {Button} from './Button'
const Form = ({ classNameForm, actionVal, obj }) => {
  return (
    <>
      <form
        action={actionVal}
        className={classNameForm}
        noValidate
        autoComplete="off"
      >
        {obj.map((obj) => {
          return <TextFiled label={obj.label} type={obj.type} key={obj.id}/>;
        })}
        <Button val={'submit'}/>
      </form>
    </>
  );
};

export { Form };

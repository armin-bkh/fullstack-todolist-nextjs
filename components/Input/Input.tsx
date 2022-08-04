import React, { ChangeEvent } from "react";

type InputProps = {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  lbl: string;
  type: string;
  optional?: boolean;
};

function Input(props: InputProps) {
  const { lbl, name, optional, ...restProps } = props;

  const Component = restProps.type === "textarea" ? restProps.type : "input";

  return (
    <fieldset className="flex flex-col mb-5">
      <label htmlFor={name}>
        {lbl}:
        {optional && (
          <span className="text-slate-400 text-xs ml-2">(optional)</span>
        )}
      </label>
      <Component
        className="shadow rounded-md mt-3 outline-none px-3 py-1"
        id={name}
        name={name}
        {...restProps}
      />
    </fieldset>
  );
}

export default Input;

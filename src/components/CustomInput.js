import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, value, onChange} = props;
  const [validation, setValidation] = React.useState(true);
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={(e) => e.target.value==='' ? setValidation(false) : setValidation(true)}
        placeholder={placeholder}
        className={`form-control ${classname}`}
      />
      {!validation && <p className="text-danger my-0">* Required</p>}
    </div>
  );
};

export default CustomInput;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function FormField({
  // eslint-disable-next-line react/prop-types
  label, type, name, value, onChange,
}) {
  return (
    <div>
      <label>
        {label}
        :
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default FormField;

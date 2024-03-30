import { useState } from 'react';

export function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocused = (e) => {
    setFocused(true)
  };
  return (
    <div className="form__field">
      <label className="form__label" htmlFor="username">
        {label}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        className="form__input"
        onBlur={handleFocused}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}

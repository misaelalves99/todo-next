"use client";

const Checkbox = ({ checked }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => e.target.form.requestSubmit()}
      className="form-checkbox h-5 w-5"
    />
  );
};

export default Checkbox;

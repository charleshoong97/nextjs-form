export default function FormInput(props) {
  const { name, value, type, onChange } = props;

  return (
    <input
      className="form-control"
      id={name}
      name={name}
      value={value}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  );
}

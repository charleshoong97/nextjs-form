export default function FormLabel(props) {
  const { title, htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className="h5">
      {title}
    </label>
  );
}

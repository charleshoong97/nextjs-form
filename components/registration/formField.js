import FormInput from "./formInput";
import FormLabel from "./formLabel";

export default function FormField(props) {
  const { title, name, value, type, onChange } = props;
  return (
    <div className="form-group mt-3">
      <FormLabel title={title} htmlFor={name} />
      <FormInput name={name} value={value} type={type} onChange={onChange} />
    </div>
  );
}

import { FaCheckCircle } from "react-icons/fa";

export default function SaveButton(props) {
  const { save } = props;
  return (
    <button
      type="button"
      className="btn ms-2"
      style={{ width: "50px" }}
      onClick={save}
    >
      <FaCheckCircle color="green" />
    </button>
  );
}

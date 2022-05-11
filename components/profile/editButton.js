import { FaEdit } from "react-icons/fa";

export default function EditButton(props) {
  const { edit, className } = props;
  return (
    <button
      type="button"
      className="btn ms-2 col-2"
      style={{ width: "50px" }}
      onClick={edit}
    >
      <FaEdit color="orange" size="25" />
    </button>
  );
}

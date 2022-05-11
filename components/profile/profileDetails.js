import { useState } from "react";
import EditButton from "./editButton";
import SaveButton from "./saveButton";

export default function ProfileDetails(props) {
  const { label, value } = props;

  return (
    <div className="row mb-3 justify-content-center">
      <span className="col-4 align-self-center" htmlFor={label}>
        <strong>
          {label}
          <span>:</span>
        </strong>
      </span>
      <span className="col-4">{value}</span>
    </div>
  );
}

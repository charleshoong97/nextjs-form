import {
  validateEmail,
  validateName,
  validatePhone,
} from "../../utilities/formValidation";
import { connect } from "react-redux";
import ProfileDetails from "./profileDetails";

function ProfileForm(props) {
  return (
    <div style={{ maxWidth: "500px" }}>
      <ProfileDetails label="Name" value={props.user.name} />
      <ProfileDetails label="Email Address" value={props.user.email} />
      <ProfileDetails label="Contact Number" value={props.user.phone} />
    </div>
  );
}

function mapStateToProps(state) {
  const { userReducer } = state;
  return { user: userReducer };
}

export default connect(mapStateToProps)(ProfileForm);

import LogoutButton from "../components/profile/logoutButton";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProfileForm from "../components/profile/profileForm";
import { connect, useDispatch } from "react-redux";
import { logout } from "../store/actions/userAction";

function ProfilePage(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.user.name == null || props.user.name.trim() == "") {
      router.push("/");
    }
  }, []);

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    router.push("/");
  }

  return (
    <div className="row vh-100 d-flex justify-content-center align-content-center container">
      <h1 className="pb-4 text-center">
        Welcome back, <strong>{props.user.name}</strong>
      </h1>
      <ProfileForm />
      <div className="d-flex justify-content-center mt-3">
        <LogoutButton logout={handleLogout} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { userReducer } = state;
  return { user: userReducer };
}

export default connect(mapStateToProps)(ProfilePage);

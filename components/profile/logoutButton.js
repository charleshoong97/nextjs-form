export default function LogoutButton(props) {
  const { logout } = props;

  return (
    <button
      className="btn btn-primary"
      style={{ width: "100px" }}
      onClick={logout}
    >
      Logout
    </button>
  );
}

import RegistrationForm from "../components/registration/registrationForm";

export default function RegistrationPage(props) {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div>
        <h1 className="p-2">Register An Account Now !</h1>
        <RegistrationForm />
      </div>
    </div>
  );
}

import { useState } from "react";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "../../utilities/formValidation";
import FormField from "./formField";
import RegisterButton from "./registerButton";
import { connect, useDispatch } from "react-redux";
import { login } from "../../store/actions/userAction";
import { setFormError } from "../../store/actions/errorAction";
import FormError from "./formError";
import RegisterMessage from "./registerMessage";

function RegistrationForm(props) {
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);
  const [phone, setPhone] = useState(props.user.phone);

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState();

  const dispatch = useDispatch();

  function handleRegistration(e) {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);

    var error = dispatch(
      setFormError({
        name: nameError,
        email: emailError,
        phone: phoneError,
      })
    );

    if (error) {
      return;
    }

    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        // name: name,
        // email: email,
        // phone: phone,
        name: null,
        email: null,
        phone: null,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          setSuccess(true);
          dispatch(
            login({
              name: name,
              email: email,
              phone: phone,
            })
          );
          return res.json();
        } else {
          if (res.status == 401) {
            setSuccess(false);
            return res.json();
          } else throw Error(res.statusText);
        }
      })
      .then((res) => {
        setMessage(res.message);
      })
      .catch((error) => {
        setSuccess(false);
        setMessage(error);
      });
  }

  return (
    <div className="card card-body m-3">
      <form onSubmit={handleRegistration} noValidate>
        <FormField
          title="Full Name"
          name="name"
          value={name}
          type="text"
          onChange={setName}
        />
        <FormError error={props.error.name} />
        <FormField
          title="Email Address"
          name="email"
          value={email}
          type="email"
          onChange={setEmail}
        />
        <FormError error={props.error.email} />
        <FormField
          title="Contact Number"
          name="phone"
          value={phone}
          type="tel"
          onChange={setPhone}
        />
        <FormError error={props.error.phone} />
        <RegisterButton />
      </form>
      <RegisterMessage success={success} message={message} />
    </div>
  );
}

function mapStateToProps(state) {
  const { userReducer, errorReducer } = state;
  return { user: userReducer, error: errorReducer };
}

export default connect(mapStateToProps)(RegistrationForm);

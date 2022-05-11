import { useRouter } from "next/router";

export default function RegisterMessage(props) {
  const { success, message } = props;
  const router = useRouter();

  var className = "mt-3 alert ";

  if (message != null && message != "") {
    className += "visible ";
  } else {
    className += "invisible ";
  }

  if (success) {
    className += "alert-success ";
    setTimeout(() => {
      router.push("/profilePage");
    }, 2000);
  } else {
    className += "alert-danger ";
  }

  return (
    <div role="alert" className={className}>
      {message != null && message.split(/\r?\n/).length > 0
        ? message.split(/\r?\n/).map((e) => <p key={e}>{e}</p>)
        : message}
    </div>
  );
}

import {
  validateName,
  validateEmail,
  validatePhone,
} from "../../utilities/formValidation";
import { nullHandling } from "../../utilities/helpers";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(401).json({ message: "Invalid Access" });
    return;
  }

  var result = JSON.parse(req.body);

  var name = result.name;
  var email = result.email;
  var phone = result.phone;

  let error = "";
  error += nullHandling(validateName(name));
  if (error != "") {
    error += "\n";
  }
  error += nullHandling(validateEmail(email));
  if (error != "") {
    error += "\n";
  }
  error += nullHandling(validatePhone(phone));

  if (error.trim() != "") {
    res.status(401).json({ message: error });
    return;
  }

  res.status(200).json({ message: "Register Successfully" });
}

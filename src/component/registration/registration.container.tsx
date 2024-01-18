import { ChangeEvent, useState } from "react";
import RegistrationUI from "./registration.presenter";
import { debounce } from "lodash";
import axios from "axios";

export default function Registration() {
  const [inputs, setInputs] = useState({
    title: "",
    url: "",
  });

  const onChange = (event: ChangeEvent) => {
    debounceChange(event);
  };

  const debounceChange = debounce((event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  }, 300);

  const onClickCancel = () => {
    window.location.href = "http://localhost:3000/TIL";
  };

  const onClickRegistration = () => {
    axios
      .post("http://localhost:3002/TIL/registration", inputs)
      .then(function (res) {
        console.log(res.data);
        if (res.data.success === true) {
          window.location.href = "http://localhost:3000/TIL";
        } else if (res.data.success === false) {
          console.log("실패");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <RegistrationUI
      onChange={onChange}
      onClickCancel={onClickCancel}
      onClickRegistration={onClickRegistration}
    ></RegistrationUI>
  );
}

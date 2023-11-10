import { ChangeEvent, useState } from "react";
import RegistrationUI from "./registration.presenter";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Registration() {
  const navigate = useNavigate();
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
    navigate(-1);
  };

  const onClickRegistration = () => {
    axios
      .post("http://localhost:3002/TIL/registration", inputs)
      .then(function (res) {
        console.log(res.data);
        if (res.data.success === true) {
          console.log("성공");
          navigate("/TIL");
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

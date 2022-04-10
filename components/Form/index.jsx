import { useState } from "react";
import {
  FormStyled,
  Label,
  Input,
  TextArea,
  Button,
  CallbackMessage,
} from "./styles";

const defaultState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Form = () => {
  const [form, setForm] = useState(defaultState);
  const [message, setMessage] = useState("");

  const handleInput = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (form.name && form.email) {
      setMessage(
        `Thanks ${form.name} for contacting us we will be in touch with you shortly.`
      );
      console.log(form);
    }
  };
  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <Label>
        Name*
        <Input
          autoComplete="off"
          onChange={handleInput}
          type="text"
          placeholder="Patricio Aguilar"
          name="name"
          required
        />
      </Label>
      <Label>
        Email*
        <Input
          autoComplete="off"
          onChange={handleInput}
          type="email"
          placeholder="Email"
          name="email"
          required
        />
      </Label>
      <Label>
        Subject
        <Input
          autoComplete="off"
          onChange={handleInput}
          type="text"
          placeholder="Subject"
          name="subject"
        />
      </Label>
      <Label>
        Message
        <TextArea
          rows={1}
          onChange={handleInput}
          placeholder="Message"
          name="message"
        />
      </Label>
      {message && <CallbackMessage>{message}</CallbackMessage>}
      <Button type="submit">Submit</Button>
    </FormStyled>
  );
};

export default Form;

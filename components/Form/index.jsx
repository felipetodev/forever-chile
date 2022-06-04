import { useState } from "react";
import {
  FormStyled,
  Label,
  Input,
  TextArea,
  Button,
  Container,
  CallbackMessage,
} from "./styles";
import api from "./api";

const errorMessage =
  "Something went wrong, please try again here: contact@forever-chile.com";

const defaultState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Form = ({ submitMessage }) => {
  const [form, setForm] = useState(defaultState);
  const [message, setMessage] = useState("");

  const handleInput = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      const res = await api.sendForm(form);
      if (res.success === "false") setMessage(errorMessage);
      if (res.success === "true") setMessage(submitMessage);
      setForm(defaultState);
    }
  };
  return (
    <Container>
      {!message && (
        <FormStyled onSubmit={handleOnSubmit}>
          <Label>
            Name*
            <Input
              value={form.name}
              autoComplete="off"
              onChange={handleInput}
              type="text"
              placeholder="Name"
              name="name"
              required
            />
          </Label>
          <Label>
            Email*
            <Input
              value={form.email}
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
              value={form.subject}
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
              value={form.message}
              rows={3}
              onChange={handleInput}
              placeholder="Message"
              name="message"
            />
          </Label>
          <Button type="submit">Submit</Button>
        </FormStyled>
      )}
      {message && (
        <CallbackMessage>
          {message}
          <button onClick={() => setMessage("")}>Back to contact form</button>
        </CallbackMessage>
      )}
    </Container>
  );
};

export default Form;

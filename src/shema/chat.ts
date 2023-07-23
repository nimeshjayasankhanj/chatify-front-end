import * as yup from "yup";

const ChatSchema = yup.object().shape({
  message: yup.string().required("Message is a required field"),
});

export default ChatSchema;

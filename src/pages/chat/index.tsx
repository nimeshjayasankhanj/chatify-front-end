import { Chip, Grid } from "@mui/material";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "src/store";
import { Empty, Loader } from "src/components/molecules";
import { Button, Card, InputBox } from "src/components/atoms";
import { useForm } from "react-hook-form";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import axios from "src/utils/axios";
import { addNewMessage } from "src/store/slices/chat-messages-slice";
import { useMutation } from "react-query";
import { chatMessages } from "src/service/chat-messages";
import { Error } from "src/components/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import ChatSchema from "src/shema/chat";
const socket = io(process.env.REACT_APP_API_URL as string);

const Chat = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      message: "",
    },
    resolver: yupResolver(ChatSchema),
  });

  const saveMessage = async (data: any) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/chat/save-message`,
      data
    );
  };
  const { mutate } = useMutation(saveMessage, {});

  const onSubmit = async (data: any) => {
    reset();
    const chatData = {
      message: data.message,
      id,
    };
    socket.emit(`message`, chatData);
    mutate(chatData);
  };

  useEffect(() => {
    // Listen for incoming chat messages
    socket.on(`message_${id}`, (message) => {
      dispatch(addNewMessage({ message }));
    });
  }, []);

  useEffect(() => {
    fetchChatMessages();
  }, []);

  const fetchChatMessages = () => {
    dispatch(chatMessages(id));
  };

  const { data, isLoading, isSuccess, isError } = useSelector(
    (state: RootStore) => state.chats
  );

  if (isLoading) {
    return <Loader />;
  }

  if (data.length === 0 && isSuccess) {
    return <Empty />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Grid container item>
      <Grid md={3} sm={12} xs={12}></Grid>
      <Grid md={6} sm={12} xs={12}>
        <Card>
          {data.map((value: any, index: number) => (
            <Grid container item key={index} pt={2}>
              <Grid md={12}>
                <Chip label={value.message} color="primary" />
              </Grid>
            </Grid>
          ))}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container item>
              <Grid md={9} sm={12}>
                <InputBox
                  placeholder="Type your message here.."
                  name="message"
                  error={errors?.message?.message}
                  control={control}
                />
              </Grid>
              <Grid md={3} sm={12}>
                <Button
                  type="submit"
                  style={{
                    marginTop: "20px",
                    marginLeft: "10px",
                    borderRadius: "35px",
                    backgroundColor: "#8B26B2",
                  }}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
      <Grid md={3} sm={12} xs={12}></Grid>
    </Grid>
  );
};

export default Chat;

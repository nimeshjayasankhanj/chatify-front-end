import { Card, Grid, ListItemButton } from "@mui/material";
import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
import { AppDispatch, RootStore } from "src/store";
import { supportUsers } from "src/service/support-users";
import { Empty, Loader } from "src/components/molecules";
import { useNavigate } from "react-router-dom";
import axios from "src/utils/axios";
import { OnError } from "src/dto/common.dto";
import { customerLists } from "src/service/customer-lists";

const ChatUsers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    dispatch(supportUsers());
  };

  const { data, isLoading, isSuccess, isError } = useSelector(
    (state: RootStore) => state.support_users
  );

  const successfullySaved = (data: any) => {
    navigate(`/chat/${data.data.data.chat_room_id}`);
  };

  const initializeChat = async (id: string) => {
    return axios.post(`http://localhost:8000/chat/initialize-chat`, {
      id: id,
    });
  };
  const { mutate } = useMutation(initializeChat, {
    onError: (error: OnError) => {
      console.log(error);
    },
    onSuccess: successfullySaved,
  });

  const createAChat = async (id: string) => {
    mutate(id);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Grid container item>
      <Grid md={4} sm={12} xs={12}></Grid>
      <Grid md={4} sm={12} xs={12}>
        {isSuccess && data.length === 0 ? (
          <Empty />
        ) : (
          <Card>
            {data.map((value: any, index: number) => (
              <List key={value._id}>
                <ListItemButton onClick={() => createAChat(value._id)}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={value.full_name} />
                  </ListItem>
                </ListItemButton>
              </List>
            ))}
          </Card>
        )}
      </Grid>
      <Grid md={4} sm={12} xs={12}></Grid>
    </Grid>
  );
};

export default ChatUsers;

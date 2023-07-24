import { Card, Grid, ListItemButton } from "@mui/material";
import React, { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "src/store";
import { Empty, Error, Loader } from "src/components/molecules";
import { useNavigate } from "react-router-dom";
import { customerLists } from "src/service/customer-lists";

const ChatUsers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    dispatch(customerLists());
  };
  const { data, isLoading, isSuccess, isError } = useSelector(
    (state: RootStore) => state.customers
  );

  const createAChat = async (id: string) => {
    navigate(`/chat/${id}`);
  };

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

import React from "react";
import { Box, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  notificationBadge: {
    fontSize: 12,
    backgroundColor: '#3A8DFF',
    width: 24,
    height: 24,
    marginTop: 10
  }
}));

const ChatContent = ({ conversation }) => {
  const classes = useStyles();

  const { otherUser, notificationCount } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;
  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>   
      {notificationCount > 0 && <Avatar className={classes.notificationBadge}>{notificationCount}
</Avatar>}
    </Box>
  );
};

export default ChatContent;

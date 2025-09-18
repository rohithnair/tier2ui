import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  InputAdornment,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SmartToyIcon from "@mui/icons-material/SmartToy"; // System icon
import Alert from "@mui/material/Alert";
import PersonIcon from "@mui/icons-material/Person";
import { Helmet } from "react-helmet";

type ChatMessage = {
  text: string;
  sender: "user" | "system";
};

const TierDataChat: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const eventSourceRef = useRef<EventSource | null>(null);

  const sendMessage = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }
    const baseUrl = process.env.REACT_APP_BaseUrl;
    if (!baseUrl) {
      setMessages((prev) => [
        ...prev,
        { text: "Error: Unknown chat provider", sender: "system" },
      ]);
      return;
    }
    // Add user message
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    eventSourceRef.current = new EventSource(
      `${baseUrl}/chat/stream?message=${encodeURIComponent(input)}`
    );
    eventSourceRef.current.onmessage = (event) => {
      setMessages((prev) => [
        ...prev,
        { text: event.data, sender: "system" },
      ]);
    };
    eventSourceRef.current.onerror = (err) => {
      console.log("readyState:", eventSourceRef.current?.readyState);
      eventSourceRef.current?.close();
    };
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>UKTiersponsors- Chat</title>
        <link  href="%PUBLIC_URL%/chat" />
        <meta name="description" content="This page helps to interact with UKTiersponsors AI Chat bot."/>
        </Helmet>

    <Container maxWidth="sm" sx={{ mt: 6, mb: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Alert severity="warning" sx={{ mb: 3 }}>
          Disclaimer: Chat feature is experimental and may not always provide
          accurate results.
        </Alert>

        <Typography variant="h5" gutterBottom>
          Chat
        </Typography>
        <TextField
          fullWidth
          label="Type company name, town to search whether the company is present in sponsor list"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{ mb: 3 }}
          inputProps={{ maxLength: 200 }} 
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="send"
                  onClick={sendMessage}
                  edge="end"
                  disabled={!input.trim()}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            minHeight: 300,
            height: 300, // Fixed height for chat area
            background: "#f5f5f5",
            borderRadius: 2,
            p: 2,
            overflowY: "auto", // Enables vertical scrollbar
          }}
        >
          <List>
            {messages.map((msg, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor:
                        msg.sender === "system" ? "primary.main" : "grey.500",
                    }}
                  >
                    {msg.sender === "system" ? (
                      <SmartToyIcon />
                    ) : (
                      <PersonIcon />
                    )}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={msg.text}
                  sx={{
                    ml: 1,
                    color: msg.sender === "system" ? "primary.main" : "inherit",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    maxWidth: "80%",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
    </React.Fragment>
  );
};

export default TierDataChat;
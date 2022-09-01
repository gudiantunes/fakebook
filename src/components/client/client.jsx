import "./client.scss";
import ChatPage from "../../routes/chat/chat";
import LoginPage from "../../routes/login/login";
import React from "react";
import { 
    BrowserRouter as Router,
    Route, 
    Routes
} from "react-router-dom";

const Client = (props) => {
  return (
    <Router>
      <div className="client">
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Client;

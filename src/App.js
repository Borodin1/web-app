import "./App.css";
import React from "react";

//Components
import { NavBar } from "./Components/NavBar";
import { HomePage } from "./Components/Post/HomePage";
import { SinglePostPage } from "./Components/Post/SinglePostPage";
import { EditPostForm } from "./Components/Post/EditPostFrom";
import { UsersList } from "./Components/User/UsersList";
import { SingleUser } from "./Components/User/SingleUser";
//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:postId" element={<SinglePostPage />} />
        <Route path="/editPost/:postId" element={<EditPostForm />} />
      </Routes>
      <Routes>
        <Route path="/friends" element={<UsersList />} />
        <Route path="/userProfile/:userId" element={<SingleUser />} />
      </Routes>
    </Router>
  );
}

export default App;

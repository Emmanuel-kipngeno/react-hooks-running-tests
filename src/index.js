import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
await waitFor(() => {
  expect(screen.getByText('please pass this test')).toBeInTheDocument();
});

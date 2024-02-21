import {
  Routes,
  Route,
} from "react-router-dom";
import { Grid } from 'antd';
import { useAppDispatch } from "./app/hooks";
import { useEffect, useState } from "react";
import LOGIN from "./pages/Login";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LOGIN />} />
    </Routes>
  );
}
export default App;
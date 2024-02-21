import { FunctionComponent, useState } from "react";
import styles from "./Login.module.css";
import { Input, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login } from "../app/reducers/authSlice";

const LOGIN: FunctionComponent = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch()

  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  const error = useAppSelector(state => state.auth.error)
  

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if(!username || !password||username===password) {
      alert("error.................")
      return
    }
    dispatch(login({ username, password }))
    if (isAuthenticated)
    {
      alert("Login successfully.............!")
    } else {
      alert("Error!")
    }
  }

  return (
    <div className={styles.bg}>
      <form className={styles.mindPortalParent}>
        <div className={styles.mindPortal}>
          <b className={styles.mind}>MIND</b>
          <span className={styles.portal}>PORTAL</span>
        </div>
        <div className={styles.usernamePasswordParent}>
          <Input
            className={styles.username}
            placeholder="Username"
            bordered={true}
            onChange={handleUsernameChange}
          />
          <Input
            className={styles.password}
            placeholder="Password"
            bordered={true}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={styles.loginTextParent}>
          <Button type="primary" className={styles.loginText} onClick={handleClick}>
            LOGIN
          </Button>
          <div className={styles.alreadyHaveAccountContainer}>
            <span
              className={styles.alreadyHaveAccount}
            >{`Already have account? `}</span>
            <span className={styles.loginHere}>Login here</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LOGIN;
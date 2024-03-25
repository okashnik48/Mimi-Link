import { Button, Result } from "antd";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Error: FC = () =>{
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/");
      };
    return (
        <Result
        status="404"
        title={<h2 style={{ color: "white" }}>404</h2>} 
        subTitle={<h2 style={{ color: "white" }}>This is wrong url.</h2>} 
        style={{ color: "white" }}
        extra={
          <Button onClick={onClick} type="primary" style={{ marginLeft: "10px", backgroundColor: "white", color: "black", borderRadius: "15px", fontSize: "20px", height: "auto" }}>
            Back to Mini Link
          </Button>
        }
      />
    )
}

export default Error
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
        title="404"
        subTitle="This is wrong url."
        extra={
          <Button onClick={onClick} type="primary">
            Back to Mini Link
          </Button>
        }
      />
    )
}

export default Error
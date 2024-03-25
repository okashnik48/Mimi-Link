import React, { FC } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { CoreInput } from "../../ui-kit/CoreInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Spin } from "antd";


import linkService from "../../services/link.service";

import { Typography } from "antd";
import { CopyOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

type DefaultValues = {
  linkName: string;
};

const InputForm: FC = () => {
  const URL =
    /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

  const schema = yup.object().shape({
    linkName: yup.string().matches(URL, "Enter a valid url"),
  });

  const { handleSubmit, control } = useForm<DefaultValues>({
    defaultValues: {
      linkName: "",
    },
    resolver: yupResolver(schema) as any,
  });

  const [sendFullLinkTrigger, { data, isLoading, isError, error }] =
    linkService.useSendFullUrlMutation();
  const onSubmit: SubmitHandler<DefaultValues> = (formData) => {
    sendFullLinkTrigger({ original_link: formData.linkName });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "flex-start",
        }}
      >
        <div>
          <CoreInput
            control={control}
            name="linkName"
            type="text"
            size="large"
            placeholder="Your link"
          />
        </div>

        <Button htmlType="submit" type="primary" style={{ marginLeft: "10px", backgroundColor: "white", color: "black", borderRadius: "15px" }} size="middle">
          Confirm
        </Button>
      </form>
      {isLoading ? (
        <div>
          <Spin style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center"}} tip="Loading" size="large"></Spin>
        </div>
      ) : isError ? (
        <h2 style={{ marginTop: "30px", color: "black", textAlign: "center" }}>Something wrong</h2>
      ) : (
        <Paragraph
          style={{ fontSize: "30px", marginTop: "-40px" , marginLeft: "750px", color: "white"}}
          copyable={data? {
            text: data,
            icon: <CopyOutlined style={{ color: "white" }} />
          } : false}
        >
          {data}
        </Paragraph>
      )}
    </div>
  );
};
//{error.data.message}
export default InputForm;

import { Button } from "antd";
import React, { FC, useEffect } from "react";
import linkService from "../../services/link.service";
import { CoreInput } from "../../ui-kit/CoreInput";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../store/store";
import { SetStatistics } from "../../store/slices/statistics";
import { SetIsStatisticsLoading } from "../../store/slices/statistics";

type DefaultValues = {
  short_link: string;
};

const InputForStats: FC = () => {
  const dispatch = useAppDispatch();

  const { handleSubmit, control, getValues } = useForm<DefaultValues>({
    defaultValues: {
      short_link: "",
    },
  });

  const [skip, setSkip] = React.useState(true);

  const {
    data,
    isLoading,
    refetch: SeeLinkStats,
    isUninitialized,
    isError
  } = linkService.useGetLinksStatisticsQuery(
    getValues("short_link").replace("http://localhost:3000/", ""),
    { skip }
  );
  const onSubmit: SubmitHandler<DefaultValues> = (formData) => {
    setSkip(false);
    if (!isUninitialized) SeeLinkStats()
  };

  useEffect(() => {
    if (data) dispatch(SetStatistics(data));
    dispatch(SetIsStatisticsLoading(isLoading));
  }, [data, isLoading]);

  useEffect(() =>{
    if (isError){
        dispatch(SetStatistics({created_at: "", count: -1}));
        dispatch(SetIsStatisticsLoading(false));
    }
  }, [isError])

  return (
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
          name="short_link"
          type="text"
          size="large"
          placeholder="Your link"
        />
      </div>

      <Button
        htmlType="submit"
        type="primary"
        style={{
          marginLeft: "10px",
          backgroundColor: "white",
          color: "black",
          borderRadius: "15px",
        }}
        size="middle"
      >
        Confirm
      </Button>
    </form>
  );
};

export default InputForStats;

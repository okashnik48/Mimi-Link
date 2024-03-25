import { Empty, Spin } from "antd";
import React, { FC, useEffect } from "react";
import { useAppSelector } from "../../store/store";

const Statistics: FC = () => {
  const statisticList = useAppSelector(
    (state) => state.StatisticsReducer.stats
  );
  const isLoading = useAppSelector(
    (state) => state.StatisticsReducer.isLoading
  );

  return (
    <div>
      <h1
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Statistics
      </h1>
      {isLoading ? (
        <div>
          <Spin
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            tip="Loading"
            size="large"
          ></Spin>
        </div>
      ) : null}
      {statisticList.count !== null &&
      !isLoading &&
      statisticList.count !== -1 ? (
        <div style={{ marginTop: "50px" }}>
          <h1
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "normal"
            }}
          >{`Create at: ${statisticList.created_at}`}</h1>
          <h1
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "normal"
            }}
          >{`${statisticList.count} times this link was opened`}</h1>
        </div>
      ) : null}
      {!isLoading && statisticList.count === -1 && (
        <Empty description={<div style={{ color: "white" }}>no data</div>} />
      )}
    </div>
  );
};

export default Statistics;

//{statisticList === undefined && !isLoading ? <Empty /> : <></>}

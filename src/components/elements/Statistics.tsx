import { Empty, Select, Spin } from "antd";
import React, { FC, useMemo, useState } from "react";
import linkService from "../../services/link.service";


type Stats = {
  count: number;
  fullLinkName: string;
};

// const statisticsList: Stats[] = [
//   {
//     count: 1,
//     fullLinkName: "def.org",
//   },
//   {
//     count: 4,
//     fullLinkName: "235234lkgdkf;glkdf;lgk;ldsfk;lgksdg'ksfd;gksdlfg.com",
//   },
//   {
//     count: 6,
//     fullLinkName: "234we.co",
//   },
// ];

const sortOptions = [
  {
    label: "count up",
    value: "count up",
  },
  {
    label: "count down",
    value: "count down",
  },
  {
    label: "newest",
    value: "newest",
  },
  {
    label: "oldest", 
    value: "oldest"
  }
];

type SortParams = "count up" | "count down" | "newest" | "oldest";

const Statistics: FC = () => {
  const [sortParam, setSortParam] = useState<SortParams>("newest");

  const {data: statisticsList, isLoading} = linkService.useGetLinksStatisticsQuery(null, {
    selectFromResult: ({ data, isLoading }) => ({
      data: data? Object.values(data) : [],
      isLoading
    }),
  });

  

  const sortedStatisticsList = useMemo(() => {
    switch (sortParam) {
      case "count up":
        return statisticsList.sort((a, b) => {
          return a.count - b.count;
        });
      case "count down":
        return statisticsList.sort((a, b) => {
          return b.count - a.count;
        });
      case "newest":
        return statisticsList.reverse();
      case "oldest":
        return statisticsList
    }
  }, [sortParam, statisticsList]);

  console.debug(sortedStatisticsList)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {statisticsList.length !== 0 && !isLoading? (<div style={{ display: "block", marginLeft: "-430px" }}>
        <h2 style={{ display: "inline-block" }}>Sort by</h2>
        <Select
          style={{
            minWidth: "120px",
            display: "inline-block",
            marginLeft: "10px",
          }}
          defaultValue={"newest"}
          options={sortOptions}
          onChange={(value) => setSortParam(value as SortParams)}
        />
      </div>) : <></>}
      {isLoading ? (
        <div>
          <Spin style={{ marginTop: "20px" }} tip="Loading" size="large"></Spin>
        </div>
      ) : <></>}
      {sortedStatisticsList.map((listItem, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            padding: "15px",
            border: "2px solid teal",
            marginTop: "15px",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "30px",
            width: "600px",
          }}
        >
          <div style={{ display: "block" }}>
            <div style={{ display: "inline-block" }}>{`${index + 1}.`}</div>
            <div
              style={{
                display: "inline-block",
                marginLeft: "10px",
                width: "400px",
              }}
            >
              {listItem.short_link}
            </div>
          </div>
          <div style={{ width: "130px" }}>count: {listItem.count}</div>
        </div>
      ))}
      {statisticsList.length === 0 && !isLoading? <Empty /> : <></>}
    </div>
  );
};

export default Statistics;

import { toast } from "react-toastify";
import { serviceApi } from "./app.service";

type LinkStat = {
    count: number, 
    fullLinkName: string 
}

type links = Record<string, LinkStat>


const linkService = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    sendFullUrl: builder.mutation<string , {short_link: string}>({
      query: (body) => ({
        url: "/transform",
        method: "POST",
        body,
      }),
      async onQueryStarted(arg, api) {
        api.queryFulfilled
          .then(() => {
            toast.success("Success");
          })
          .catch(({ error }) => {
            console.log(error)
            toast.error(error.data.message);
          });
      },
    }),
    getLinksStatistics: builder.query<LinkStat[], null>({
      query: () => ({
        url: "statistics"
      }),
    }),
    getFullLink: builder.query<string, string>({
        query: (uuId) => ({
          url: `original/${uuId}`,
        }),
      }),
  }),
});

export default linkService;
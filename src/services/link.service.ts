import { toast } from "react-toastify";
import { serviceApi } from "./app.service";

type LinkStat = {
    count: number, 
    fullLinkName: string 
}

type links = Record<string, LinkStat>


const linkService = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    sendFullUrl: builder.mutation<{shortLink: string}, {linkName: string}>({
      query: (body) => ({
        url: "shortLink",
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
        url: "stats"
      }),
    }),
    getFullLink: builder.query<string, string>({
        query: (uuId) => ({
          url: `stats${uuId}`,
        }),
      }),
  }),
});

export default linkService;
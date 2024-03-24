import { toast } from "react-toastify";
import { serviceApi } from "./app.service";

type LinkStat = {
  count: number;
  short_link: string;
};

type LinksProps = Record<string, LinkStat>;

const linkService = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    sendFullUrl: builder.mutation<string, { original_link: string }>({
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
            error.data
              ? toast.error(error.data.message)
              : toast.error(error.error);
          });
      },
      invalidatesTags: ["link"],
    }),
    getLinksStatistics: builder.query<LinksProps, null>({
      query: () => ({
        url: "statistics",
      }),
      providesTags: ["link"],
    }),
    getFullLink: builder.query<string, string>({
      query: (uuId) => ({
        url: `original/${uuId}`,
      }),
    }),
  }),
});

export default linkService;

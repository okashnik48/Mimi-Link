import { toast } from "react-toastify";
import { serviceApi } from "./app.service";
import { useAppDispatch } from "../store/store";

type LinkStat = {
  count: number | null;
  created_at: string;
};

const dispatch = useAppDispatch;

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
    getLinksStatistics: builder.query<LinkStat, string>({
      query: (short_link) => ({
        url: `statistics/${short_link}`,
      }),
      async onQueryStarted(arg, api) {
        api.queryFulfilled
          .then(() => {
            toast.success("Success");
          })
          .catch(({ error }) => {
            error.data
              ? toast.error(error.data)
              : toast.error(error.error);
          });
      },
    }),
    getFullLink: builder.query<string, string>({
      query: (uuId) => ({
        url: `original/${uuId}`,
      }),
      
    }),
  }),
});

export default linkService;

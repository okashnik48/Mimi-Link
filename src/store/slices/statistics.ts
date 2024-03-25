import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LinkStat = {
    count: number | null;
    created_at: string;
  };

interface AdminUsersState {
  stats: LinkStat;
  isLoading: boolean;
}

const initialState: AdminUsersState = {
    stats: {
        count: null,
        created_at: "",
    },
    isLoading: false
};

export const StatisticsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    SetStatistics: (state, action: PayloadAction<LinkStat>) => {
      state.stats = action.payload;
    },
    SetIsStatisticsLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload;
      },
  },
});

export const {
    SetStatistics,
    SetIsStatisticsLoading
} = StatisticsSlice.actions;

export const StatisticsReducer = StatisticsSlice.reducer;

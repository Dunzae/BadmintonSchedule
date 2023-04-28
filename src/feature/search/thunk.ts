import axiosInstance from "util/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { IGetCompetitionByName, IGetClubListByCompetition } from "./type"

export const getCompetitionByName = createAsyncThunk(
  "search/getCompetitionByName",
  async ({ query, pageStart, pageLimit }: IGetCompetitionByName, thunkAPI) => {
    const response = await axiosInstance({
      method: "post",
      url: "mobile_tm_list.php",
      data: {
        DATA: JSON.stringify({
          pageStart,
          pageLimit,
          schTmNm: query,
        }),
      },
    })

    if (response.data.data_list.length === 0) {
      return thunkAPI.rejectWithValue("no data")
    }

    return response.data
  }
)

export const getClubListByCompetition = createAsyncThunk(
  "search/getClubListByCompetition",
  async ({ competitionId }: IGetClubListByCompetition, thunkAPI) => {
    const response = await axiosInstance({
      method: "post",
      url: "usp_get_entry_list_by_group.php",
      data: {
        DATA: JSON.stringify({
          p_tournament_id: competitionId ?? "",
          p_group_id: "",
        }),
      },
    })

    if (response.data.data_list[0].CLUB_NM1 === null)
      thunkAPI.rejectWithValue("no data")

    return response.data
  }
)
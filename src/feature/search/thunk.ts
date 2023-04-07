import axiosInstance from "util/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { IGetCompetitionByName, IGetClubListByCompetition } from "./type"

export const getCompetitionByName = createAsyncThunk(
  "search/getCompetitionByName",
  async ({ query, pageStart, pageLimit }: IGetCompetitionByName) => {
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

    return response.data
  }
)

export const getClubListByCompetition = createAsyncThunk(
  "search/getClubListByCompetition",
  async ({ competitionId }: IGetClubListByCompetition) => {
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

    return response.data
  }
)

// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi" }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    /*
    getPlayerTasks: builder.query({
      query: (userID) => `/player/${userID}`
    }),
    getPlayerDaily: builder.query({
      query: (userID) => `/daily/${userID}`
    }),*/
    getCharacterTasks: builder.query({
      query: (charID) => `/characterTasks/${charID}`
    }),
    /*
    endpoints: (builder) => ({
      getPokemonByName: builder.query({
        query: (name) => `pokemon/${name}`,
      }),
    */

    //task has the form of id, player character, userid(creator),
    getTask: builder.query({
      query: (taskID) => `/task/${taskID}`
    }),
    getAllTaskSets: builder.query({
      query: () => "/taskSets"
    }),
    getRandomTaskSet: builder.query({
      query: () => '/randomTaskSet'
    }),
    getRandomTaskSetTasks: builder.query({
      query: () => '/randomTaskSetTasks'
    }),
    //work is a semi_completed_task
    getWorkSimple: builder.mutation({}),
    //
    /*
    editWork: builder.mutation({
      query: (work) => ({
        url: `/work/${work.ID}/${work.userID}`,
        body: work,
      }),
    }),
    */
    //editTaskSet: builder.mutation({}),
    getUserTaskSets: builder.query({
      query: userID => `/taskSets/${userID}`
    }),
  })
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useEditWorkMutation,
  useGetCharacterTasksQuery,

  useGetAllTaskSetsQuery,
  useGetRandomTaskSetQuery,
  useGetRandomTaskSetTasksQuery
} = apiSlice;

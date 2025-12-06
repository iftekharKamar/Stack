import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getallStacks, createStack } from "../api/stacksApi";

export const getAllStacks = createAsyncThunk(
  "stacks/getAll",
  async (token, { rejectWithValue }) => {
    try {
      return await getallStacks(token);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const addStack = createAsyncThunk(
  "stacks/create",
  async ({ token, title, desc, slug }, { rejectWithValue }) => {
    try {
      return await createStack(token, title, desc, slug);
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const stacksSlice = createSlice({
  name: "stacks",
  initialState: {
    stacks: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllStacks.pending, (state) => { state.loading = true; })
      .addCase(getAllStacks.fulfilled, (state, action) => {
        state.loading = false;
        state.stacks = action.payload;
      })
      .addCase(getAllStacks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addStack.fulfilled, (state, action) => {
        state.stacks.push(action.payload);
      });
  },
});

export default stacksSlice.reducer;

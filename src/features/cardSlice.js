import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getallCards, createCard } from "../api/cardsApi";

export const getAllCards = createAsyncThunk(
  "card/getAll",
  async ({ token, stackId }, { rejectWithValue }) => {
    try {
      
      const data = await getallCards(token, stackId); // pass stackId
      if (!data || data.length === 0) {
        console.log("No cards returned");
      }
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const addCard = createAsyncThunk(
  "card/create",
  async ({ token, stackId, title, desc, thumb_url, canonical_url, domain }, { rejectWithValue }) => {
    try {
      return await createCard(
        token,
        stackId,
        title,
        desc,
        thumb_url,
        canonical_url,
        domain
      );
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      // GET CARDS
      .addCase(getAllCards.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(getAllCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ADD CARD
      .addCase(addCard.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.loading = false;
        state.cards.push(action.payload);
      })
      .addCase(addCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cardSlice.reducer;

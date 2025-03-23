import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  files: string[]; // base64 encoded images
  initialPrompt: string | null;
  selectedRepository: string | null;
};

const initialState: SliceState = {
  files: [],
  initialPrompt: null,
  selectedRepository: null,
};

export const selectedFilesSlice = createSlice({
  name: "initialQuery",
  initialState,
  reducers: {
    addFile(state, action: PayloadAction<string>) {
      state.files.push(action.payload);
    },
    removeFile(state, action: PayloadAction<number>) {
      state.files.splice(action.payload, 1);
    },
    clearFiles(state) {
      state.files = [];
    },
    setInitialPrompt(state, action: PayloadAction<string>) {
      state.initialPrompt = action.payload;
    },
    clearInitialPrompt(state) {
      state.initialPrompt = null;
    },
    setSelectedRepository(state, action: PayloadAction<string | null>) {
      state.selectedRepository = action.payload;
    },
    clearSelectedRepository(state) {
      state.selectedRepository = null;
    },
  },
});

export const {
  addFile,
  removeFile,
  clearFiles,
  setInitialPrompt,
  clearInitialPrompt,
  setSelectedRepository,
  clearSelectedRepository,
} = selectedFilesSlice.actions;
export default selectedFilesSlice.reducer;

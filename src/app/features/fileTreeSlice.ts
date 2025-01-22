import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces/fileTree";

interface IClickedFile {
  name: string;
  content: string | undefined;
  active: boolean | undefined;
  activeTabId: string;
}

interface initialState {
  openedFile: IFile[];
  clickedFile: IClickedFile;
}

const initialState: initialState = {
  openedFile: [],
  clickedFile: {
    name: "",
    content: "",
    active: false,
    activeTabId: "",
  },
};

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    //here actions goes
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    setOpenedFileAction: (state, action: PayloadAction<IFile[]>) => {
      // action is storing the payload that comming from the setOpenedFile paramater

      // if(action.payload.)
      // const repeatedClickedFile = [...new Set(action.payload)];
      state.openedFile = action.payload;
    },

    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile.name = action.payload.name;
      state.clickedFile.content = action.payload.content;
      state.clickedFile.active = action.payload.active;
      state.clickedFile.activeTabId = action.payload.activeTabId;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpenedFileAction, setClickedFileAction } =
  fileTreeSlice.actions;

export default fileTreeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store/store";

const initialState = {
  isLoading: false,
  isSidebarExpanded: true,
  isDropDownOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
    // STOP LOADING
    stopLoading(state) {
      state.isLoading = false;
    },
    // Expand sidebar
    expandSidebar(state) {
      state.isSidebarExpanded = true;
    },
    // Collapse sidebar
    unexpandSidebar(state) {
      state.isSidebarExpanded = false;
    },
    // Open dropdown
    openDropDown(state) {
      state.isDropDownOpen = true;
    },
    // Close dropdown
    closeDropDown(state) {
      state.isDropDownOpen = false;
    },
  },
});

// Export actions
export const { 
  startLoading, 
  stopLoading, 
  expandSidebar, 
  unexpandSidebar, 
  openDropDown, 
  closeDropDown 
} = userSlice.actions;

export default userSlice.reducer;

export function setSideBarOpened() {
  return async () => {
    dispatch(userSlice.actions.expandSidebar());
  };
}

export function setSideBarClosed() {
  return async () => {
    dispatch(userSlice.actions.unexpandSidebar());
  };
}

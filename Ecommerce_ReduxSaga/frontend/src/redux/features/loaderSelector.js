import { createSelector } from "@reduxjs/toolkit";

const selectLoader = (state) => state.loader;

export const selectShowLoader = createSelector(selectLoader, (loader) => loader);
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../utils/DataType';

export interface PDFState {
  data: FormData;
}

const initialState: PDFState = {
  data: {
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    summary: '',
    experience: [],
    education: [],
  },
};

const pdfSlice = createSlice({
  name: 'pdf',
  initialState,
  reducers: {
    setPDFData(state, action: PayloadAction<FormData>) {
      state.data = action.payload;
    },
  },
});

export const { setPDFData } = pdfSlice.actions;
export default pdfSlice.reducer;

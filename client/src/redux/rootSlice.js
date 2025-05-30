import { createSlice} from "@reduxjs/toolkit";

const rootSlice=createSlice({
    name:'root',
    initialState:{
        loading:false,
        portfolioData:null,
        refetchData:false
    },
    reducers:{
        ShowLoading:(state, action)=>{
            state.loading=true;
        },
        HideLoading:(state, action)=>{
            state.loading=false;
        },
        SetPortfolioData:(state, action)=>{
            state.portfolioData=action.payload
        },
        RefetchData:(state, action)=>{
            state.refetchData=action.payload;
        }
    }
});

export default rootSlice.reducer;
export const {ShowLoading, HideLoading, SetPortfolioData, RefetchData}=rootSlice.actions;

 
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


// Action :  {type: "Coin/fetch", payload: ""}

const FetchData = createAsyncThunk(

    //Action: type : payload

    'Coin/fetch',   // ye Type hai

    async (args, thunkAPI)=>{

        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const Data = await response.json();
            return Data;        // ye jo value hai return Data yahi payload mey jaati hai and jo value hai ye --> {type: "Coin/fetch", payload: ""} ye update ho kar ----> {type: "Coin/fetch", payload: "Data"}
        }

        catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//jo value hai for expample FetchAPI(20) to jo value hai 20 vahi args mey jaati hai jisko hum arguments bolte hai

// {type: 'Coin/fetch/pending', payload: undefined}
// {type: 'Coin/fetch/fullfilled', payload: Data}
// {type: 'Coin/fetch/rejected', payload: "error_message"}




const slicer1 = createSlice({

    name: 'slice1',
    initialState: {Data:[], loading: false, error: null},
    reducers: {},
    extraReducers: (builder)=>{             // ismey compare yo normal reducer slice ka name nahi rehta like type-name
        builder
        .addCase(FetchData.pending, (state)=> {
            state.loading = true;
            state.error = null;
        })

        .addCase(FetchData.fulfilled, (state, action)=> {
            state.Data = action.payload;
            state.loading = false;
        })

        .addCase(FetchData.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        })
    }
});


export default slicer1.reducer;
export {FetchData};

import { createSlice } from '@reduxjs/toolkit'


const teamSlice = createSlice({
    name: 'team',
    initialState: {
        teams: [],
    },
    reducers: {
        setTeam: (state, action) => {
            state.team = action.payload;
        },
        addPlayerToTeam: (state, action) => {
            state.team.players.push(action.payload);
        },
        removePlayerFromTeam: (state, action) => {
            state.team.players = state.team.players.filter(
                (player) => player.id !== action.payload
            );
        },
    }
});

export const { setTeam, addPlayerToTeam, removePlayerFromTeam } = teamSlice.actions;
export default teamSlice.reducer;

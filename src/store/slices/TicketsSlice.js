import { createSlice } from "@reduxjs/toolkit";
import tickets from '../../local-json/tickets.json';

const initialState = {
    ticketsList: tickets.tickets,
    visibleTickets: tickets.tickets,
    activeStops: []
};

export const StopEnum = {
    None: 0,
    One: 1,
    Two: 2,
    Three: 3
}

export const TicketsSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        toggleStops(state, action) {
            if (state.activeStops.includes(action.payload)) {
                state.activeStops = state.activeStops
                    .filter(x => x !== action.payload);
            } else {
                state.activeStop = state.activeStops.push(action.payload);
            }
            state.visibleTickets = state.ticketsList;

            state.visibleTickets = state.visibleTickets
                .filter(x => state.activeStops.includes(x.stops));

            if (!state.activeStops.length) {
                state.visibleTickets = state.ticketsList;
            }
        },
        toggleAllStops(state, action) {
            state.visibleTickets = state.ticketsList;
            state.activeStops = [];
        }
    },
});

export const ticketsReducer = TicketsSlice.reducer;
export const { toggleStops, toggleAllStops } = TicketsSlice.actions;
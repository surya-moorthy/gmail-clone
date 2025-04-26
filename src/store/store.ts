import {create} from "zustand";

interface OpenState {
    open : boolean;
    SetOpen : ()=>void
    hidden: boolean;
    SetHidden : ()=>void
}

const useOpenState = create<OpenState>()((set)=>({
    open : false,
    hidden : false,
    SetOpen : ()=>set((state) => ({ open: !(state.open)})),
    SetHidden : ()=>set((state)=> ({hidden : !(state.hidden)}))
}))

export default useOpenState;
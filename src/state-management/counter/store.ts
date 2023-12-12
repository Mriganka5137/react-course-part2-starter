import { create } from "zustand";

interface counterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<counterStore>((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ counter: 0 })),
}));

export default useCounterStore;

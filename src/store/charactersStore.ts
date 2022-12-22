import create from "zustand";

interface Characters {
  characters: any[];
  isLoading: boolean;
  fetchCharacters: () => void;
};

export const useCharacters = create<Characters>()((set) => ({
  characters: [],
  isLoading: false,
  fetchCharacters: async () => {
    set({isLoading: true});
    const res = await fetch('https://rickandmortyapi.com/api/character');
    
    try {
      const data = await res.json();
      set({ characters: data.results });
    } catch (error) {
      console.error(error);
    } finally {
      set({isLoading: false});
    }
  }
}));
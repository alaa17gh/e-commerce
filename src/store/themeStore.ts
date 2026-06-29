import { create } from 'zustand'

interface ThemeStore {
    dark: boolean
    toggleDark: () => void
}

export const useThemeStore = create<ThemeStore>()((set) => ({
    dark: false,
    toggleDark: () => set((state) => {
        const newDark = !state.dark
        document.documentElement.classList.toggle('dark')
        return { dark: newDark }
    }),
}))
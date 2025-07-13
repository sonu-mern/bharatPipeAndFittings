export const theme = {
  colors: {
    primary: '#314559',
    secondary: '#ed2025',
    secondaryDark: '#ff080c',
    secondaryShadow: 'rgba(237, 32, 37, 0.4)',
    secondaryShadowDark: 'rgba(255, 8, 12, 0.6)',

    // NEW primaryAccent colors
    primaryAccent: '#768BEC',
    primaryAccentDark: '#5a6fbf',
    primaryAccentLight: '#a4b7f5',
  },

  setThemeColors: (root = document.documentElement) => {
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-secondary-dark', theme.colors.secondaryDark);
    root.style.setProperty('--color-secondary-shadow', theme.colors.secondaryShadow);
    root.style.setProperty('--color-secondary-shadow-dark', theme.colors.secondaryShadowDark);

    // NEW: Add accent color variables
    root.style.setProperty('--color-primary-accent', theme.colors.primaryAccent);
    root.style.setProperty('--color-primary-accent-dark', theme.colors.primaryAccentDark);
    root.style.setProperty('--color-primary-accent-light', theme.colors.primaryAccentLight);
  },
};

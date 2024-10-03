import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'refere',
  webDir: 'www',
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    },
    android: {
      // Configuración específica de Android si es necesario
    },
    ios: {
      // Configuración específica de iOS si es necesario
    },
  }}
export default config;

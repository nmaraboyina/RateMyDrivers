import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ratemydrivers.app',
  appName: 'Rate My Driver',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;

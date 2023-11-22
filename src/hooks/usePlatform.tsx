import { Platform } from 'react-native';

/**
 * Represents the platform return object that indicates the supported platforms.
 * @interface PlatformReturn
 * @property {boolean} web - Indicates if the platform is web.
 * @property {boolean} ios - Indicates if the platform is iOS.
 * @property {boolean} android - Indicates if the platform is Android.
 * @property {boolean} macos - Indicates if the platform is macOS.
 * @property {boolean} windows - Indicates if the platform is Windows.
 */
interface PlatformReturn {
  web: boolean;
  ios: boolean;
  android: boolean;
  macos: boolean;
  windows: boolean;
}

/**
 * Returns an object indicating the current platform based on the value of Platform.OS.
 * @returns {PlatformReturn} An object with properties indicating the current platform.
 */
export const usePlatform = (): PlatformReturn => {
  const web = Platform.OS === 'web';
  const ios = Platform.OS === 'ios';
  const android = Platform.OS === 'android';
  const macos = Platform.OS === 'macos';
  const windows = Platform.OS === 'windows';

  return {
    web,
    ios,
    android,
    macos,
    windows,
  };
};

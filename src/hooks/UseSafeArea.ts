import { useSafeAreaInsets } from "react-native-safe-area-context";

export function UseSafeArea() {
  const { top, bottom } = useSafeAreaInsets();

  return {
    top: Math.max(top, 30),
    bottom: Math.max(bottom, 30),
  };
}
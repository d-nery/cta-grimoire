import { decode } from "./coder";

export const fromUrl = () => {
  try {
    return decode(
      (window.location.search ?? "?")
        .slice(1),
    );
  } catch (e) {
    return;
  }
};

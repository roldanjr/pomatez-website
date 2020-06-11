type OSTypes = "Windows" | "MacOS" | "Linux" | "UNIX";

export function detectOS(): OSTypes {
  const { appVersion } = navigator;
  if (appVersion.indexOf("Win") != -1) return "Windows";
  if (appVersion.indexOf("Mac") != -1) return "MacOS";
  if (appVersion.indexOf("Linux") != -1) return "Linux";
  if (appVersion.indexOf("X11") != -1) return "UNIX";
  return "Windows";
}

export const allowedCall = (url: string, pattern: string | "*") => {
  const patterns = pattern.split(',');
  if (pattern === "*") {
    return true;
  }
  const trimmed = url
    .replace("http://", "")
    .replace("https://", "")
    .split('/')
    .at(0);
  return patterns.includes(trimmed ?? "");
};

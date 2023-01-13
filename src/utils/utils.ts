export function titleCase(str: string): string {
  let splitStr: string[] = str.toLowerCase().split(" ");
  for (let i: number = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

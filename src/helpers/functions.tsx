function cutStr(str: string) {
  const trimmedString = str.trim();

  if (trimmedString.length > 20) {
    const newString = trimmedString.slice(0, 21).trim();
    return `${newString}...`;
  }

  return trimmedString;
}

export default cutStr;

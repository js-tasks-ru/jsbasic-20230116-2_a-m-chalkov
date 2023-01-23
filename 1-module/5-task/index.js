function truncate(str, maxlength) {
  let newlen = maxlength - 1;
  let newstr;
  if (str.length > maxlength) {
      newstr = str.slice(0,newlen) + '…';
  } else {
      newstr = str;
  }
  return newstr;
}

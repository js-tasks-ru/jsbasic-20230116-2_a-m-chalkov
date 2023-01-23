function checkSpam(str) {
  let retval = false;
  const dict = [];
  dict.push('1xbet', 'xxx');
  for (let entry in dict) {
      if ( str.toLowerCase().indexOf(dict[entry]) != -1 ) {
          retval = true;
          break;
      }
  }

//  i think that expected solution should be something like that code below, but this is too boring, so i made some investigations to docs and wrote the code above.

//  if ( str.toLowerCase().indexOf('1xbet') != -1 ) {
//      retval = true;
//  }
//  if ( str.toLowerCase().indexOf('xxx') != -1 ) {
//      retval = true;
//  }

  return retval;
}

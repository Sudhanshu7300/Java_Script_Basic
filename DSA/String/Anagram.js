//  Anagram strings are two strings build up by the same set of characters, where the order of characters is the only difference in ths strings

function checkAnagram(str1, str2) {
  let ObjStr1 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (ch of str1) {
    ObjStr1[ch] = (ObjStr1[ch] || 0) + 1;
  }
  for (ch of str2) {
    if (!ObjStr1[ch]) {
      return false;
    }
    ObjStr1[ch]--;
  }
  return true;
}
console.log(checkAnagram("hello", "ehllo"));

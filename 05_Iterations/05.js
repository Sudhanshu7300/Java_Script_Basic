//HOC
const coding = ["JS", "Ruby", "Java", "Pyton", "Cpp"];

coding.forEach((element) => {
  //   console.log(element);
});

function printME(item) {
  //   console.log(item);
}
coding.forEach(printME);

coding.forEach((item, index, arr) => {
  //   console.table([item, index, arr]);
});

const myCoding = [
  { languageName: "Javascript", languageFileName: "js" },
  { languageName: "java", languageFileName: "java" },
  { languageName: "pyton", languageFileName: "pyton" },
];

myCoding.forEach((element) => {
  console.log(element.languageName, element.languageFileName);
});

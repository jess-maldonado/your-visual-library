let file = {};

const csv = require("csvtojson");

export const csvToJson = (csv) => {
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    // Replacing commas with a space after with a space so that I can split by comma
    // Replacing all quotes because they're unnecessary and not consistent in the data
    let currentLine = lines[i].replace(/\, /g, " ").replace(/\"/g, "");
    let splitLine = currentLine.split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = splitLine[j];
    }
    result.push(obj);
  }
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
};

const processFile = (file) => {
  var reader = new FileReader();
  reader.readAsText(file)[0];

  let result = "123";

  reader.onload = function () {
    result = csvToJson(reader.result);
  };
  reader.onerror = () => {
    console.log(reader.error);
    result = "error";
  };
  console.log(result);
  return result;
};

export default processFile;

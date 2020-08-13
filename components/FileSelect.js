import { FilePicker } from "evergreen-ui";

let files = {};

const csv = require("csvtojson");

const csvToJson = (csv) => {
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
  console.log(JSON.stringify(result)); //JSON
};

const readFiles = (files) => {
  var reader = new FileReader();
  reader.onload = function () {
    // Display CSV file contents
    csvToJson(reader.result);
  };
  reader.onerror = () => {
    console.log(reader.error);
  };
};

const FileSelect = (props) => {
  return (
    <FilePicker
      name="goodreads_library"
      capture
      accept="text/csv"
      width={250}
      margin={20}
      onChange={(files) => readFiles(files)}
      placeholder="Select the file here!"
    />
  );
};

export default FileSelect;

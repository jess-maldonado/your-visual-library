export const csvToObjects = (csv) => {
  const lines = csv.split("\n");
  let result = [];
  let headers = lines[0].replace(/\ /g, "").split(",");
  for (let i = 1; i < lines.length; i++) {
    let obj = {};
    // Replacing commas with a space after with a space so that I can split by comma
    // Replacing all quotes because they're unnecessary and not consistent in the data
    let currentLine = lines[i].replace(/\, /g, " ").replace(/\"/g, "");
    let splitLine = currentLine.split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = splitLine[j];
    }
    result.push(obj);
  }
  return result;
};

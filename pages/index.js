import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FilePicker } from "evergreen-ui";

let files = {};

const csv = require("csvtojson");

// async storeFile = (files) => {
//   // var form = new FormData();
//   // form.append("name", "goodreads");
//   // form.append("csv", files[0]);
//   // console.log(form.getAll("csv"));

//   async (files) => {
//     const jsonObj = await csv().fromFile(files[0])
//     console.log(jsonObj);
//   }

// };

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

  reader.readAsText(files[0]);
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <FilePicker
          name="goodreads_library"
          capture
          accept="text/csv"
          width={250}
          marginBottom={32}
          onChange={(files) => readFiles(files)}
          placeholder="Select the file here!"
        />

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

import React from "react";
import { Pane, Heading, Paragraph, Link } from "evergreen-ui";
import styles from "../styles/Intro.module.css";
import FileSelect from "../components/FileSelect";

const Home = (props) => {
  return (
    <Pane
      className={styles.background}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Pane
        width="55%"
        height="45%"
        background="white"
        border
        elevation={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={40}
        justifyContent="flex-start"
      >
        <Heading size={900} padding={10} textAlign="center">
          Your Visual Library
        </Heading>
        <Heading size={400}>Visualize your Goodreads Library</Heading>
        <Paragraph size={500} paddingTop={25}>
          Welcome fellow bookworm! You've spent years tracking your reading on
          Goodreads, and now you can see it come to life. Simply{" "}
          <Link
            size={500}
            href="https://www.goodreads.com/review/import"
            target="_"
          >
            export your library
          </Link>{" "}
          and upload the file below. This app works best in a desktop browser.
        </Paragraph>

        <Paragraph size={400} marginTop={20} marginBottom={20}>
          <strong>
            This web app is completely browser-based, so none of your data will
            be stored.
          </strong>
        </Paragraph>
        <FileSelect buttonText="Build my charts!" />
      </Pane>
    </Pane>
  );
};

export default Home;

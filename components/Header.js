import React from "react";
import { Pane, Heading } from "evergreen-ui";
import FileSelect from "../components/FileSelect";
import styles from "../styles/Intro.module.css";

const Header = () => {
  return (
    <Pane
      width="100%"
      height={175}
      backgroundColor="teal"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding={50}
      className={styles.bookImage}
      elevation={2}
    >
      <Heading
        size={700}
        textShadow="3px 3px 10px rgba(0, 0, 0, 1)"
        color="white"
      >
        Visualize your Goodreads Library
      </Heading>
      <FileSelect buttonText="Update charts" />
    </Pane>
  );
};

export default Header;

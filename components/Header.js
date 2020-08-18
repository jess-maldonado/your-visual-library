import React from "react";
import { Pane, Heading } from "evergreen-ui";
import FileSelect from "../components/FileSelect";
import styles from "../styles/Intro.module.css";

const Header = () => {
  return (
    <Pane
      width="100%"
      height={150}
      backgroundColor="teal"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding={50}
      className={styles.bookImage}
      elevation={2}
    >
      {/* <Heading size={700} color="white">
        Visualize your Goodreads Library
      </Heading> */}
      <FileSelect margin={20} buttonText="Update charts" />
    </Pane>
  );
};

export default Header;

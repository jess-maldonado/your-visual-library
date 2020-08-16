import React from "react";
import { Pane, Heading } from "evergreen-ui";
import FileSelect from "../components/FileSelect";

const Header = () => {
  return (
    <Pane
      width="100%"
      height={150}
      background="teal"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding={50}
    >
      <Heading size={700} color="white">
        LIBRARY STATS
      </Heading>
      <FileSelect margin={20} />
    </Pane>
  );
};

export default Header;

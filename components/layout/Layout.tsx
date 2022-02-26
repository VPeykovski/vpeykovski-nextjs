import { useState } from "react";

import { useTranslation } from "next-i18next";
import { Container, ContainerProps } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import Nav from "./Nav";

type LayoutProps = React.PropsWithChildren<ContainerProps & {}>;

export default function Layout({ children }: LayoutProps) {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isChildRender, setIsChildRender] = useState(true);
  const { t } = useTranslation();

  const matches = useMediaQuery("(min-width:1200px)");

  const isMenuClickedHandler = () => {
    setIsMenuClicked(!isMenuClicked);
    setIsChildRender(!isChildRender);
  };
  let Child;
  if (isChildRender) {
    Child = <Container>{children}</Container>;
  }
  if (!isChildRender && matches) {
    Child = <Container>{children}</Container>;
  }
  return (
    <Container
      disableGutters={true}
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "background.default",
        maxWidth: "100%",
        margin: 0,
      }}
      maxWidth={false}>
      {matches && <Nav />}
      {Child}

      {!matches && isMenuClicked && <Nav />}
      {!matches && (
        <IconButton
          sx={{
            color: "typography.main",
            position: "fixed",
            top: "10px",
            right: "10px",
            height: "60px",
            width: "60px",
          }}
          aria-label='menu'
          component='button'
          onClick={isMenuClickedHandler}>
          {isMenuClicked ? (
            <CloseIcon sx={{ fontSize: 44 }} />
          ) : (
            <MenuIcon sx={{ fontSize: 44 }} />
          )}
        </IconButton>
      )}
    </Container>
  );
}

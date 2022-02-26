import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  Theme,
} from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

type ButtonProps = React.PropsWithChildren<MuiButtonProps & {}>;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      borderTop: "1px solid",
      borderTopColor: theme.palette.buttonBorder.main,
      borderBottom: "1px solid",
      borderBottomColor: theme.palette.buttonBorder.main,
      borderRight: "none",
      borderLeft: "none",
      color: theme.palette.typography.main,
      borderRadius: "0",
      transition: "none",
      textTransform: "none",
      "&:hover": {
        borderColor: theme.palette.buttonBorder.main,
      },
    },
  })
);

export default function Button(props: ButtonProps) {
  const classes = useStyles();
  return (
    <MuiButton
      className={classes.button}
      type={props.type}
      onClick={props.onClick}
      variant={props.variant}
      size={props.size}>
      {props.children}
    </MuiButton>
  );
}

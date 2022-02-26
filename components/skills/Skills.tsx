import Layout from "../layout/Layout";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import TransformTitle from "../transformTitle/TransformTitle";
const useStyles = makeStyles(() => createStyles({ main: { color: "white" } }));
export default function Skills() {
  const classes = useStyles();
  return (
    <Layout>
      <TransformTitle title='Skills' />
    </Layout>
  );
}

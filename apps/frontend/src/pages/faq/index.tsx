import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, CircularProgress, Collapse, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { fromBase64 } from "js-base64";
import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { faqs } from "../../api/faq";
import HeaderComponent from "../../components/Header";
import { FaqType } from "../../types/FaqType";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Row({ faq }: { faq: FaqType }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        key={faq.id}
        onClick={() => setOpen(!open)}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ wordWrap: "break-word" }}>
          {faq.id}
        </TableCell>
        <TableCell align="left">{faq.createdAt.toString()}</TableCell>
        <TableCell align="left">{faq.title}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit easing={"easing"}>
            <SyntaxHighlighter language="markdown" style={stackoverflowDark}>
              {fromBase64(faq.solution)}
            </SyntaxHighlighter>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export const FaqPage: React.FC<object> = () => {
  const [rows, setRows] = React.useState<FaqType[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const list = async () => {
    const collection: FaqType[] = await faqs.getAll();
    return collection;
  };
  React.useEffect(() => {
    setLoading(true);
    list()
      .then((r) => {
        setRows(r);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <HeaderComponent title="Faqs" description="blog-kb" />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="left" width={"25%"}>
                  ID
                </TableCell>
                <TableCell align="left" width={"20%"}>
                  CreatedAt
                </TableCell>
                <TableCell align="left">Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((aFaq: FaqType) => {
                return <Row key={aFaq.id} faq={aFaq} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default FaqPage;

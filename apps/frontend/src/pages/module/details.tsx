import { ChevronRightOutlined, ExpandMoreOutlined } from "@mui/icons-material";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { TreeItem, TreeView } from "@mui/x-tree-view";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { modules } from "../../api/module";
import HeaderComponent from "../../components/Header";
import { ModuleType } from "../../types/ModuleType";

const ModuleDetailPage: React.FC = () => {
  const { moduleId } = useParams<string>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [module, setModule] = React.useState<ModuleType | null>(null);
  const [selected, setSelected] = React.useState<string>("");
  const [fileContent, setFileContent] = React.useState<string>("");

  React.useEffect(() => {
    async function fetchData() {
      const response = await modules.getById({ id: moduleId as string });
      setModule(response !== null && response);
      setFileContent(response?.module.description);
      setLoading(false);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId]);

  const handleSelect = async (
    event: React.SyntheticEvent,
    nodeIds: string
  ): Promise<void> => {
    if (nodeIds.startsWith("node")) {
      setSelected("");
      return;
    }
    setSelected(nodeIds);
    setFileContent(
      await modules.getFileContentById(moduleId as string, nodeIds)
    );
  };

  return (
    <Container maxWidth="xl">
      <HeaderComponent title="IaC - Modules" description="Terraform Modules" />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container columnSpacing={2}>
            <Grid item xs={12} xl={4}>
              <Box
                my={2}
                sx={{
                  backgroundColor: "#2d2d2d",
                  padding: "1rem",
                  alignItems: "flex-start",
                  textAlign: "left",
                }}
              >
                <TreeView
                  aria-label="file system navigator"
                  defaultCollapseIcon={<ExpandMoreOutlined />}
                  defaultExpandIcon={<ChevronRightOutlined />}
                  defaultExpanded={["node-examples", "node-main"]}
                  onNodeSelect={handleSelect}
                >
                  <TreeItem nodeId="node-main" label="Module Files">
                    {module?.files.length > 0
                      ? module.files.map((file) => {
                          if (file.filename.startsWith("example") === false)
                            return (
                              <TreeItem
                                nodeId={file.id}
                                key={file.id}
                                label={file.filename}
                              />
                            );
                        })
                      : null}
                  </TreeItem>
                  <TreeItem nodeId="node-examples" label="Module Examples">
                    {module !== null && module.files.length > 0
                      ? module.files.map((file) => {
                          if (file.filename.startsWith("example"))
                            return (
                              <TreeItem
                                nodeId={file.id}
                                key={file.id}
                                label={file.filename.replace("examples/", "")}
                              />
                            );
                        })
                      : null}
                  </TreeItem>
                </TreeView>
              </Box>
            </Grid>
            <Grid item xs={12} xl={8}>
              {fileContent !== "" ? (
                <SyntaxHighlighter
                  customStyle={{
                    padding: "1rem",
                    alignItems: "flex-start",
                    textAlign: "left",
                  }}
                  language="markown"
                  style={stackoverflowDark}
                >
                  {fileContent}
                </SyntaxHighlighter>
              ) : null}
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default ModuleDetailPage;

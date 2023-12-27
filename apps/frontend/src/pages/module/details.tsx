import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { modules } from "../../api/module";
import MinHeightTextarea from "../../components/MinHeightTextarea";
import { ModuleType } from "../../types/ModuleType";

const ModuleDetailPage: React.FC = () => {
  const { moduleId } = useParams<string>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [module, setModule] = React.useState<ModuleType | null>(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await modules.getById({ id: moduleId as string });
      setModule(response !== null && response);
      setLoading(false);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId]);

  return (
    <Box sx={{ width: "100%", mb: 5, mt: 2 }} textAlign="center">
      <Container maxWidth="xl">
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Grid sx={{ mt: 2 }} container columnSpacing={2}>
              <Grid item xs={12}>
                <Typography sx={{ mb: 2 }} variant="body1" component="p">
                  {module!.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "block",
                    width: "100%",
                    justifyContent: "center",
                    mt: 2,
                  }}
                ></Box>
              </Grid>
            </Grid>
            <Grid sx={{ mt: 2 }} container columnSpacing={2}>
              <Grid item xs={12}>
                <MinHeightTextarea text={module?.description as string} />
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};

export default ModuleDetailPage;

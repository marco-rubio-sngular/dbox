import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import { tags } from "../../api/tag.ts";
import HeaderComponent from "../../components/Header.tsx";
import { TagType } from "../../types/TagType.ts";

export const HomePage: React.FC<object> = () => {
  const [rows, setRows] = React.useState<TagType[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const columns = React.useMemo<GridColDef<TagType>[]>(
    () => [
      {
        field: "createdAt",
        headerName: "Created At",
        flex: 1,
        type: "dateTime",
      },
      { field: "title", headerName: "Tag Name", flex: 1 },
      { field: "value", headerName: "Tag Value", flex: 1 },
    ],
    []
  );

  const list = async () => {
    const collection: TagType[] = await tags.getAll();

    const lists: TagType[] = [];
    collection.forEach((item) => {
      lists.push({
        id: item.id,
        title: item.title,
        value: item.value,
        createdAt: item.createdAt,
      });
    });

    return lists;
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
      <HeaderComponent title="" description="tags" />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div style={{ width: "100%" }}>
            {rows!.length !== 0 ? (
              <DataGrid
                autoHeight={true}
                rows={rows!}
                columns={columns}
                density="standard"
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 20 },
                  },
                }}
                pageSizeOptions={[10, 20, 50, 100]}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Alert severity="error" variant="outlined">
                  <Typography
                    sx={{ mt: 1, mb: 1 }}
                    variant="body1"
                    textAlign={"center"}
                  >
                    Ups! parece que no hay datos
                  </Typography>
                </Alert>
              </Box>
            )}
          </div>
        </>
      )}
    </Container>
  );
};

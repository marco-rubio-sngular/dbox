import { DeleteOutline } from "@mui/icons-material";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
} from "@mui/x-data-grid";
import React from "react";
import { tags } from "../../api/tag.ts";
import { TagType } from "../../types/TagType.ts";
import HeaderComponent from "../../components/Header.tsx";

export const HomePage: React.FC<object> = () => {
  const [rows, setRows] = React.useState<TagType[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const deleteUser = React.useCallback(
    (id: GridRowId) => () => {
      if (confirm("Are you sure?") === false) {
        return;
      }

      setTimeout(() => {
        setRows((prevRows) =>
          prevRows !== null ? prevRows.filter((row) => row.id !== id) : prevRows
        );
      });
    },
    []
  );

  const columns = React.useMemo<GridColDef<TagType>[]>(
    () => [
      { field: "id", headerName: "ID", width: 100 },
      { field: "title", headerName: "Tag Name", width: 150 },
      { field: "value", headerName: "Tag Value", width: 200 },
      {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "dateTime",
      },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteOutline />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
        ],
      },
    ],
    [deleteUser]
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
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 20 },
                  },
                }}
                pageSizeOptions={[10, 20, 50, 100]}
                checkboxSelection
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

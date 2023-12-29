import { EditOutlined, RemoveRedEyeSharp } from "@mui/icons-material";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import React from "react";
import { tags } from "../../api/tag.ts";
import HeaderComponent from "../../components/Header.tsx";
import { TagType } from "../../types/TagType.ts";
import { themePalette } from "../../config/ThemeConfig.tsx";

export const HomePage: React.FC<object> = () => {
  const [rows, setRows] = React.useState<TagType[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const columns = React.useMemo<GridColDef<TagType>[]>(
    () => [
      {
        field: "title",
        headerName: "Name",
        flex: 1,
        headerClassName: "super-app-theme--header",
      },
      {
        field: "value",
        headerName: "Value",
        flex: 1,
        headerClassName: "super-app-theme--header",
      },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        headerClassName: "super-app-theme--header",
        width: 80,
        getActions: () => [
          <GridActionsCellItem
            icon={<EditOutlined />}
            label="Ver"
            title="Ver"
            onClick={() => alert(1)}
          />,
        ],
      },
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
      <HeaderComponent title="Tags Common" description="With custom value" />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div style={{ width: "100%" }}>
            {rows!.length !== 0 ? (
              <Box
                sx={{
                  width: "100%",
                  "& .super-app-theme--header": {
                    backgroundColor: themePalette.BG_SUCCESS_MAIN,
                    color: themePalette.SUCCESS_MAIN,
                    fontWeight: "bold",
                  },
                }}
              >
                <DataGrid
                  autoHeight={true}
                  rows={rows!}
                  columns={columns}
                  density="compact"
                  disableRowSelectionOnClick
                  showCellVerticalBorder
                  showColumnVerticalBorder
                  style={{
                    borderRadius: "4px",
                  }}
                  sx={{ mb: 2 }}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10, 20, 50, 100]}
                />
              </Box>
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

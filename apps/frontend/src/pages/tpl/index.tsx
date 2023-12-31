import { RemoveRedEyeSharp } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { fromBase64 } from "js-base64";
import React from "react";
import HeaderComponent from "../../components/Header.tsx";
import { themePalette } from "../../config/ThemeConfig.tsx";

export const TemplatePage: React.FC<object> = () => {
  const [rows, setRows] = React.useState<object[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const columns = React.useMemo<GridColDef<object>[]>(
    () => [
      {
        field: "title",
        headerName: "Name",
        flex: 1,
        headerClassName: "super-app-theme--header",
      },
      {
        field: "description",
        headerName: "Description",
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
            icon={<RemoveRedEyeSharp />}
            label="Ver"
            title="Ver"
            onClick={() => alert("to-do")}
          />,
        ],
      },
    ],
    []
  );

  const list = async () => {
    const collection: {
      id: string;
      title: string;
      description: string;
      createdAt: Date;
    }[] = [
      {
        id: "1",
        title: "title 1",
        description: "description 1",
        createdAt: new Date(),
      },
      {
        id: "2",
        title: "title 2",
        description: "description 2",
        createdAt: new Date(),
      },
    ];

    const lists: object[] = [];
    collection.forEach((item) => {
      lists.push({
        id: item.id,
        title: fromBase64(item.title),
        description: fromBase64(item.description).substring(0, 100) + "...",
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
      <HeaderComponent
        title="Title Common"
        description="any description"
        element={<Button href="/">OPTIONAL</Button>}
      />
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

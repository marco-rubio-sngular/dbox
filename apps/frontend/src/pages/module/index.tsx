import { RemoveRedEyeSharp } from "@mui/icons-material";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { fromBase64 } from "js-base64";
import React from "react";
import { useNavigate } from "react-router-dom";
import { modules } from "../../api/module.ts";
import HeaderComponent from "../../components/Header.tsx";
import { themePalette } from "../../config/ThemeConfig.tsx";
import { ModuleType } from "../../types/ModuleType.ts";

export const ModulePage: React.FC<object> = () => {
  const navigate = useNavigate();

  const [rows, setRows] = React.useState<ModuleType[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const columns = React.useMemo<GridColDef<ModuleType>[]>(
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
        getActions: (params) => [
          <GridActionsCellItem
            icon={<RemoveRedEyeSharp />}
            label="Ver"
            title="Ver"
            onClick={() => navigate(`/modules/${params.id}/details`)}
          />,
        ],
      },
    ],
    []
  );

  const list = async () => {
    const collection: ModuleType[] = await modules.getAll();

    const lists: ModuleType[] = [];
    collection.forEach((item) => {
      lists.push({
        id: item.id,
        title: item.title,
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
      <HeaderComponent title="Modules Common" description="With custom value" />
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

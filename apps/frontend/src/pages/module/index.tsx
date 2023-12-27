import { RemoveRedEyeSharp } from "@mui/icons-material";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import React from "react";
import { modules } from "../../api/module.ts";
import HeaderComponent from "../../components/Header.tsx";
import { ModuleType } from "../../types/ModuleType.ts";
import { useNavigate } from "react-router-dom";

export const ModulePage: React.FC<object> = () => {
  const [rows, setRows] = React.useState<ModuleType[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const navigate = useNavigate();

  const columns = React.useMemo<GridColDef<ModuleType>[]>(
    () => [
      {
        field: "createdAt",
        headerName: "Created At",
        flex: 1,
        type: "dateTime",
      },
      { field: "title", headerName: "Module Name", flex: 1 },
      { field: "description", headerName: "Module Description", flex: 1 },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<RemoveRedEyeSharp />}
            label="Ver"
            title="Ver"
            onClick={() => navigate(`/modules/${params.id}`)}
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
        description: item.description,
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
      <HeaderComponent title="IaC" description="modules" />
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

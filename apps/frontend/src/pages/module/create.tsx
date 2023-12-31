import { CloudUpload } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  Paper,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../../components/Header.tsx";
import { useNotification } from "../../context/notification.context.tsx";
import { ModuleCreateType } from "../../types/ModuleCreateType.ts";

const ModuleCreatePage: React.FC<object> = () => {
  const navigate = useNavigate();
  const { getError, getSuccess } = useNotification();
  const [formData, setFormData] = React.useState<ModuleCreateType>();

  const handleTitles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      title: formData?.title as string,
      description: formData?.description as string,
      files: formData?.files as Array<{
        path: string;
        content: string;
        name: string;
      }>,
      [e.target.name]: e.target.value,
    });
  };

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedFiles: Array<{ path: string; content: string; name: string }> =
      [];

    const fileList = e.target.files;
    for (let index = 0; index < fileList!.length; index++) {
      const file: File = fileList![index];
      const content = await file.text();
      parsedFiles.push({
        path: file.webkitRelativePath,
        content: content,
        name: file.name,
      });
    }

    setFormData({
      title: formData?.title as string,
      description: formData?.description as string,
      files: parsedFiles,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    // e.target[0].files.map((file) => console.log(file.name));
    // for (let index = 0; index < e.target[0].files.length; index++) {
    //   console.log(e.target[0].files[index]);
    // }
    // ModuleCreateValidate.validate(formData)
    //   .then(async () => {
    //     const response = await modules.moduleCreate(formData);
    //     if (response.success === true) {
    //       getSuccess("Module created successfully");
    //       // navigate("/modules");
    //       return;
    //     }
    //     getError("unable to create module");
    //   })
    //   .catch((error: { message: string }) => {
    //     getError(error.message);
    //   });

    return false;
  };

  return (
    <Container maxWidth="lg">
      <HeaderComponent title="Module Create" description="basic information" />

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        columnSpacing={2}
        mt={2}
      >
        <Grid item width={"100%"}>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Create Module
            </Typography>
            <Box
              component={"form"}
              onSubmit={handleSubmit}
              encType="application/x-www-form-urlencoded"
            >
              <InputLabel htmlFor="title">Title</InputLabel>
              <TextField
                name="title"
                id="title"
                margin="normal"
                type="text"
                fullWidth
                sx={{ mt: 2, mb: 1.5 }}
                onChange={handleTitles}
              />
              <InputLabel htmlFor="description">Description</InputLabel>
              <TextField
                name="description"
                id="description"
                margin="normal"
                type="text"
                fullWidth
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={handleTitles}
              />

              <InputLabel htmlFor="directory" sx={{ my: 5 }}>
                <Button
                  startIcon={<CloudUpload />}
                  type="button"
                  onClick={(event) => {
                    event.currentTarget.querySelector("input")?.click();
                  }}
                >
                  from directory
                  <input
                    type="file"
                    style={{ display: "none" }}
                    name="directory"
                    id="directory"
                    webkitdirectory=""
                    onChange={(ev) => handleFiles(ev)}
                  />
                </Button>
                Module directory
              </InputLabel>

              {formData?.files?.map((file) => (
                <div key={crypto.randomUUID()}>
                  <InputLabel htmlFor={file.name}>
                    {file.path} - {file.name}
                  </InputLabel>
                  <TextareaAutosize
                    name={file.name}
                    id={file.name}
                    value={file.content}
                    minRows={10}
                    maxRows={20}
                    style={{
                      width: "100%",
                      margin: "2px 0 5px 0",
                      resize: "none",
                    }}
                    required
                  ></TextareaAutosize>
                </div>
              ))}

              <Stack direction="row" spacing={2}>
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    navigate("/modules");
                  }}
                >
                  volver
                </Button>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{ mt: 1.5, mb: 2 }}
                >
                  Create Module
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ModuleCreatePage;

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import PasswordIcon from "@mui/icons-material/Password";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import Logo from "/logo.png";
import { IconButton, OutlinedInput } from "@mui/material";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100vw"}
        height={"100vh"}
      >
        <Box
          className="centerContainer"
          component="div"
          width="70%"
          display="flex"
        >
          <Box
            className="greenContainerPara"
            display="none"
            sx={{ backgroundColor: "#0FC993" }}
          >
            <Typography
              variant="p"
              color="white"
              sx={{ fontWeight: "400", fontSize: "16px", textAlign: "center" }}
            >
              Login to DealZone Dashboard by entering your login credentials{" "}
            </Typography>
          </Box>
          <Box
            className="whiteContainer"
            alignItems="left"
            boxShadow={"5px 5px 10px #ccc"}
            width="70%"
            sx={{
              ":hover": {
                boxShadow: "10px 10px 20px #ccc ",
              },
              backgroundColor: "white",
              borderRadius: "50px 0 0 50px",
              padding: "40px 8vw",
            }}
          >
            <Box
              component={"div"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src={Logo}
                alt="logo"
                style={{ object: "cover", width: "200px", margin: "0 auto" }}
              />
            </Box>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                my: 2,
                display: "flex",
                justifyContent: "left",
                alignItems: "left",
                flexDirection: "column",
              }}
            >
              <FormControl
                sx={{ pl: 0, my: 1, width: "100%" }}
                variant="outlined"
              >
                <OutlinedInput
                  sx={{ padding: "0" }}
                  id="outlined-adornment-email"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        sx={{
                          backgroundColor: "#e1e1e1",
                          borderRadius: "5px 0 0 5px",
                          padding: "12px",
                          ml: "4px",
                          "&:hover": {
                            backgroundColor: "#E1E1E1",
                          },
                        }}
                      >
                        <BadgeOutlinedIcon sx={{ color: "#50B276" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{
                    "aria-label": "email",
                  }}
                  placeholder="Email"
                />
              </FormControl>
              <FormControl
                sx={{ pl: 0, my: 1, width: "100%" }}
                variant="outlined"
              >
                <OutlinedInput
                  sx={{
                    padding: "0",
                  }}
                  id="outlined-adornment-password"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        className="custom-icon-button"
                        sx={{
                          backgroundColor: "#e1e1e1",
                          borderRadius: "5px 0 0 5px",
                          padding: "12px",
                          ml: "4px",
                          "&:hover": {
                            backgroundColor: "#E1E1E1",
                          },
                        }}
                      >
                        <PasswordIcon sx={{ color: "#50B276" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                  inputProps={{
                    "aria-label": "password",
                  }}
                  placeholder="Passowrd"
                />
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  margin: "0 auto ",
                  marginTop: "20px",
                  width: "20%",
                  backgroundColor: "#50B276",
                  color: "white",
                }}
              >
                {" "}
                Login{" "}
              </Button>
            </Box>
          </Box>{" "}
          <Box
            className="greenContainer"
            width="40%"
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            px={4}
            sx={{ backgroundColor: "#0FC993", borderRadius: "0 50px 50px 0" }}
          >
            <Typography
              className="greenH4"
              variant="h4"
              color="white"
              sx={{ fontWeight: "700", textAlign: "center" }}
            >
              Hello, Admin!
            </Typography>
            <hr
              className="break"
              style={{
                width: "50px",
                border: "3px solid white",
                borderRadius: "100px",
                margin: "20px 0",
              }}
            />
            <Typography
              className="greenPara"
              variant="p"
              color="white"
              sx={{ fontWeight: "400", fontSize: "16px", textAlign: "center" }}
            >
              {" "}
              Login to DealZone Dashboard by entering your login credentials{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#50B276",
    },
  },
});

import * as React from "react";
import "../assets/css/fonts.css";
import "../assets/css/dashboard.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import Button from "@mui/material/Button";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function SearchBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // CHART CODE
  const data = {
    labels: ["", "", "", ""],
    datasets: [
      {
        label: [],
        data: [95, 85, 65, 80],
        backgroundColor: [
          "rgba(112, 52, 247, 1)",
          "rgba(0, 128, 255, 1)",
          "rgba(0, 151, 112, 1)",
          "rgba(255, 180, 59, 1)",
        ],
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  // Chart configuration options
  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            width: 1540,
            mr: 3,
            mt: 1,
            float: "right",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0px 7px 8px -2px rgba(0,0,0,0.1)",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                width: 120,
                backgroundColor: "#e4eafa",
                padding: 1,
                borderRadius: "6px",
                marginLeft: -2,
              }}
            >
              <Typography
                variant="h6"
                // noWrap
                // component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontSize: 11,
                  color: "#00000099",
                }}
              >
                Your Organisation
              </Typography>
              <Typography
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontSize: 14,
                  fontWeight: 600,
                  color: "black",
                }}
              >
                Skill Genic
              </Typography>
            </Box>
            <Search
              sx={{
                backgroundColor: "#e4eafa",
                padding: "8px",
                borderRadius: "6px",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon
                  sx={{ color: "grey", marginTop: -1.5, marginLeft: -1 }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{ color: "black" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                "& :hover": {
                  color: "#73690b",
                  backgroundColor: "#ffb43b",
                },
              }}
            >
              <IconButton size="large">
                <Badge
                  badgeContent=""
                  color="error"
                  sx={{
                    backgroundColor: "#fffbe9",
                    padding: "5px",
                    borderRadius: "8px",
                  }}
                >
                  <NotificationsNoneOutlinedIcon
                    sx={{
                      color: "#b38b09",
                    }}
                    fontSize="large"
                  />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle
                  color="primary"
                  fontSize="large"
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#0080ff",
                    },
                  }}
                />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, color: "black" }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <br />

      {/* CARDS */}

      <Typography
        variant="h4"
        sx={{ color: "black", marginLeft: 45, marginTop: "80px" }}
      >
        Task Manager
      </Typography>
      <Box
        sx={{
          marginTop: 2,
          marginLeft: 45,
          display: "flex",
          justifyContent: "space-between",
          width: "1400px",
        }}
      >
        <Box
          sx={{
            borderRadius: "8px",
            width: 290,
            height: 140,
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              ml: 2,
              mt: 2,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#e1daf7",
            }}
          ></Box>
          <CardContent sx={{ width: 275 }}>
            <Typography sx={{ mb: 0.4, fontSize: 16 }}>
              Application in process
            </Typography>
            <Typography sx={{ fontSize: 20, fontWeight: "700" }}>21</Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            borderRadius: "8px",
            width: 290,
            height: 140,
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              ml: 2,
              mt: 2,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#daeeff",
            }}
          ></Box>
          <CardContent sx={{ Width: 275 }}>
            <Typography sx={{ mb: 0.4, fontSize: 16 }}>
              Interviews Scheduled
            </Typography>
            <Typography sx={{ fontSize: 20, fontWeight: "700" }}>12</Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            borderRadius: "8px",
            width: 290,
            height: 140,
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              ml: 2,
              mt: 2,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#ddf6f2",
            }}
          ></Box>
          <CardContent sx={{ Width: 275 }}>
            <Typography sx={{ mb: 0.4, fontSize: 16 }}>Unread Inbox</Typography>
            <Typography sx={{ fontSize: 20, fontWeight: "700" }}>
              25{" "}
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            borderRadius: "8px",
            width: 290,
            height: 140,
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              ml: 2,
              mt: 2,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#fdeedb",
            }}
          ></Box>
          <CardContent sx={{ Width: 275 }}>
            <Typography sx={{ mb: 0.4, fontSize: 16 }}>
              Request Pending
            </Typography>
            <Typography sx={{ fontSize: 20, fontWeight: "700" }}>20</Typography>
          </CardContent>
        </Box>
      </Box>

      {/* Container */}

      <Box>
        <Paper
          sx={{
            mt: 3,
            ml: 45,
            width: 920,
            height: 400,
            border: "2px solid transparent",
            borderColor: "#cacaca",
            borderRadius: "20px",
            padding: "10px",
          }}
          elevation={0}
        >
          <div className="graph">
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Hiring Pipeline
            </Typography>
            <div className="graph legends">
              <SquareRoundedIcon sx={{ color: "#7034f7" }} />
              <span>Screening&emsp;</span>
              <SquareRoundedIcon sx={{ color: "#0080ff" }} />
              <span>Interviews&emsp;</span>
              <SquareRoundedIcon sx={{ color: "#009770" }} />
              <span>Rejected&emsp;</span>
              <SquareRoundedIcon sx={{ color: "#ffb43b" }} />
              <span>Hired</span>
            </div>
            <input
              list="fruits"
              placeholder="Last month"
              id="fruit"
              name="fruit"
              autocomplete="off"
            />
            <datalist id="fruits">
              <option value="Last 3 years" />
              <option value="Last year" />
              <option value="Last month" />
              <option value="Last 15 days" />
              <option value="Last week" />
            </datalist>
          </div>
          <hr
            style={{
              width: "102%",
              marginLeft: -9,
              marginTop: "15px",
              border: "0.5px solid",
              borderColor: "#cacaca",
            }}
          />
          {/* chart */}
          <div style={{ height: 300, width: 900 }}>
            <Bar data={data} options={options} />
          </div>
        </Paper>
      </Box>

      {/* interviewer Reminder */}

      <Box>
        <Paper
          sx={{
            mt: 3,
            ml: 45,
            width: 920,
            height: 400,
            border: "2px solid transparent",
            borderColor: "#cacaca",
            borderRadius: "20px",
            padding: "10px",
          }}
          elevation={0}
        >
          <div className="graph">
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Interview Reminder
            </Typography>
            <a href="#">View All</a>
          </div>
          <hr
            style={{
              width: "102%",
              marginLeft: -9,
              marginTop: "15px",
              border: "0.5px solid",
              borderColor: "#cacaca",
            }}
          />
          {/* TABLE */}

          <table>
            <tr>
              <th>Date</th>
              <th>Candidate Name</th>
              <th>Submitted Time</th>
              <th>Job Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>01/02/2023</td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
                </Stack>
                Shubham
              </td>
              <td>2:30 AM</td>
              <td>UX Designer</td>
              <td>Submitted</td>
              <td>👁️✅❌</td>
            </tr>
          </table>
        </Paper>
      </Box>
      <Box>
        <Paper
          sx={{
            mt: 40.6,
            ml: 163,
            width: 460,
            height: 823,
            float: "right",
            position: "absolute",
            top: "0",
            border: "2px solid transparent",
            borderColor: "#cacaca",
            borderRadius: "20px",
            padding: "10px",
          }}
          elevation={0}
        >
          <div>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Onboarding Manager
            </Typography>
            <br />
            <div className="graph">
              <span>Active</span>

              <span>On Hold</span>

              <span>Completed</span>
            </div>
          </div>
          <hr
            style={{
              width: "102%",
              marginLeft: -6,
              marginTop: "-1px",
              border: "0.5px solid",
              borderColor: "#cacaca",
            }}
          />
          <div className="column_flex">
            <Paper
              sx={{
                mt: 3,
                ml: 0,
                width: 430,
                height: 200,
                backgroundColor: "#e0dbfe",
                borderRadius: "20px",
                padding: "10px",
              }}
              elevation={0}
            >
              <div>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "center", fontWeight: 600 }}
                >
                  Senior Product Manager
                </Typography>
                <br />
                <div className="details">
                  <div>
                    <Typography variant="h5">20</Typography>
                    <Typography>Total Candidates</Typography>
                    <br />
                    <Button
                      sx={{
                        borderRadius: "20px",
                        border: "none",
                        backgroundColor: "#7035ff",
                        color: "white",
                        padding: "5px 15px",
                        cursor: "auto",
                        "&:hover":{
                          backgroundColor: "#7035ff",
                        }
                      }}
                    >
                      Design
                    </Button>
                  </div>
                  <div>
                    <Typography variant="h5">11</Typography>
                    <Typography>Qualified</Typography>
                    <br />
                    On-Site
                  </div>
                </div>
              </div>
            </Paper>
            <Paper
              sx={{
                mt: 3,
                ml: 0,
                width: 430,
                height: 200,
                backgroundColor: "#dcf1fd",
                borderRadius: "20px",
                padding: "10px",
              }}
              elevation={0}
            >
              <div>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "center", fontWeight: 600 }}
                >
                  Software Engineer
                </Typography>
                <br />
                <div className="details">
                  <div>
                    <Typography variant="h5">20</Typography>
                    <Typography>Total Candidates</Typography>
                    <br />
                    <Button
                      sx={{
                        borderRadius: "20px",
                        border: "none",
                        backgroundColor: "#077dff",
                        color: "white",
                        padding: "5px 15px",
                        cursor: "auto",
                        "&:hover":{
                          backgroundColor: "#077dff",
                        }
                      }}
                    >
                      Development
                    </Button>
                  </div>
                  <div>
                    <Typography variant="h5">11</Typography>
                    <Typography>Qualified</Typography>
                    <br />
                    Remote
                  </div>
                </div>
              </div>
            </Paper>
            <Paper
              sx={{
                mt: 3,
                ml: 0,
                width: 430,
                height: 200,
                backgroundColor: "#e0ffec",
                borderRadius: "20px",
                padding: "10px",
              }}
              elevation={0}
            >
              <div>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "center", fontWeight: 600 }}
                >
                  Sr. Digtal Marketing
                </Typography>
                <br />
                <div className="details">
                  <div>
                    <Typography variant="h5">20</Typography>
                    <Typography>Total Candidates</Typography>
                    <br />
                    <Button
                      sx={{
                        borderRadius: "20px",
                        border: "none",
                        backgroundColor: "#077dff",
                        color: "white",
                        padding: "5px 15px",
                        cursor: "auto",
                        "&:hover":{
                          backgroundColor: "#077dff",
                        }
                      }}
                    >
                      Development
                    </Button>
                  </div>
                  <div>
                    <Typography variant="h5">11</Typography>
                    <Typography>Qualified</Typography>
                    <br />
                    Remote
                  </div>
                </div>
              </div>
            </Paper>
          </div>
        </Paper>
      </Box>
    </>
  );
}
export default SearchBar;

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ViewComfyRoundedIcon from "@mui/icons-material/ViewComfyRounded";
import MarkChatUnreadRoundedIcon from "@mui/icons-material/MarkChatUnreadRounded";
import ViewTimelineRoundedIcon from "@mui/icons-material/ViewTimelineRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

// recruitment icons

import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import InterpreterModeRoundedIcon from "@mui/icons-material/InterpreterModeRounded";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";

// organisation icons

import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded"; //company profile
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded"; //community
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded"; //team
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded"; //hr tool box
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded"; //report
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded"; //settings

import TokenRoundedIcon from "@mui/icons-material/TokenRounded"; //logo

const drawerWidth = 320;

function Sidebar() {
  return (
    <Box>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#1d212d",
            color: "#ffffff",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ marginLeft: -1 }}>
          <TokenRoundedIcon sx={{ fontSize: 50 }} />
          <Typography sx={{ paddingLeft: 1.5 }}>Logo</Typography>
        </Toolbar>
        <List sx={{ marginLeft: 2.7, marginTop: 4 }}>
          {["Home", "Chat", "Activities"].map((text, index) => (
            <ListItem
              sx={{
                paddingLeft: 0,
                marginLeft: 0,
                width: 273,
                "&:hover": {
                  background: "#ffb43b",
                  color: "#1d212d",
                  border: 3,
                  borderColor: "#257cb2",
                  borderRadius: 2,
                  height: 48,
                  "& .MuiSvgIcon-root": {
                    color: "#1d212d !important", // Change icon color on hover
                  },
                },
              }}
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 3 === 0 ? (
                    <ViewComfyRoundedIcon sx={{ color: "white" }} />
                  ) : index % 2 === 0 ? (
                    <ViewTimelineRoundedIcon sx={{ color: "white" }} />
                  ) : (
                    <MarkChatUnreadRoundedIcon sx={{ color: "white" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
                <ListItemIcon>
                  {index % 3 === 0 ? null : index % 2 === 0 ? (
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 4, color: "white" }}
                    />
                  ) : (
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 4, color: "white" }}
                    />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Typography sx={{ marginLeft: 4.5, color: "#6e738a" }}>
          Recruitment
        </Typography>
        <List sx={{ marginLeft: 2.7 }}>
          {["Jobs", "Interviews", "New Hires"].map((text, index) => (
            <ListItem
              sx={{
                paddingLeft: 0,
                marginLeft: 0,
                width: 273,
                "&:hover": {
                  background: "#ffb43b",
                  color: "#1d212d",
                  border: 3,
                  borderColor: "#257cb2",
                  borderRadius: 2,
                  height: 48,
                  "& .MuiSvgIcon-root": {
                    color: "#1d212d !important", // Change icon color on hover
                  },
                },
              }}
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 3 === 0 ? (
                    <WorkRoundedIcon sx={{ color: "white" }} />
                  ) : index % 2 === 0 ? (
                    <Groups3RoundedIcon sx={{ color: "white" }} />
                  ) : (
                    <InterpreterModeRoundedIcon sx={{ color: "white" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
                <ListItemIcon>
                  {index % 3 === 0 ? (
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 4, color: "white" }}
                    />
                  ) : index % 2 === 0 ? (
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 4, color: "white" }}
                    />
                  ) : (
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 4, color: "white" }}
                    />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Typography sx={{ paddingLeft: 4.5, color: "#6e738a" }}>
          Organisation
        </Typography>
        <List sx={{ marginLeft: 2.7 }}>
          {[
            "Company Profile",
            "Community",
            "Team",
            "HR Tool Box",
            "Report",
            "Settings",
          ].map((text, index) => (
            <ListItem
              sx={{
                paddingLeft: 0,
                marginLeft: 0,
                width: 273,
                "&:hover": {
                  background: "#ffb43b",
                  color: "#1d212d",
                  border: 3,
                  borderColor: "#257cb2",
                  borderRadius: 2,
                  height: 48,
                  "& .MuiSvgIcon-root": {
                    color: "#1d212d !important", // Change icon color on hover
                  },
                },
              }}
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 6 === 0 ? (
                    <LocationCityRoundedIcon sx={{ color: "white" }} />
                  ) : index % 5 === 0 ? (
                    <SettingsRoundedIcon sx={{ color: "white" }} />
                  ) : index % 4 === 0 ? (
                    <LeaderboardRoundedIcon sx={{ color: "white" }} />
                  ) : index % 3 === 0 ? (
                    <HomeRepairServiceRoundedIcon sx={{ color: "white" }} />
                  ) : index % 2 === 0 ? (
                    <Diversity1RoundedIcon sx={{ color: "white" }} />
                  ) : (
                    <LocalLibraryRoundedIcon sx={{ color: "white" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
                <ListItemIcon sx={{ display: "flex", alignItems: "flex-end" }}>
                  {index % 6 === 0 ? (
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 4, color: "white" }}
                    />
                  ) : index % 5 === 0 ? (
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 4, color: "white" }}
                    />
                  ) : index % 4 === 0 ? (
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 4, color: "white" }}
                    />
                  ) : index % 3 === 0 ? (
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 4, color: "white" }}
                    />
                  ) : index % 2 === 0 ? (
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 4, color: "white" }}
                    />
                  ) : (
                    <ChevronRightRoundedIcon
                      sx={{ marginLeft: 4, color: "white" }}
                    />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
export default Sidebar;

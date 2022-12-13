import EmailIcon from "@mui/icons-material/Email";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setDanhMuc } from "../../redux/actions/danhMuc";
const Header = ({ handleClickSidebarMobile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const danhMuc = useSelector((state) => state.danhMuc);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const HeaderItem = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "5px",
    padding: "10px",
    color: "#87808f",
    transition: "0.2s linear",

    "&:hover": {
      backgroundColor: "#f8f8f8",
      color: "#b56eff",
    },
  });
  const fetchDanhMuc = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/danhmuc`
      );
      const data = res.data;
      dispatch(setDanhMuc(data.data));
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };
  useEffect(() => {
    fetchDanhMuc();
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "0",
          backgroundColor: "#ffffff",
          width: matches ? "calc(100% - 250px)" : "100%",
          left: matches ? "250px" : "0px",
          padding: "10px",
          zIndex: 99,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {matches && (
            <Box
              sx={{
                width: "25px",
                height: "25px",
              }}
            ></Box>
          )}
          {!matches && (
            <HeaderItem onClick={handleClickSidebarMobile}>
              <ReorderIcon />
            </HeaderItem>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <HeaderItem>
              <EmailIcon />
            </HeaderItem>
            <HeaderItem>
              <NotificationsIcon />
            </HeaderItem>
            <HeaderItem onClick={() => navigate("/")}>
              <ExitToAppIcon />
            </HeaderItem>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Header;

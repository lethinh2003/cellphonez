import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const SearchForm = () => {
  const SearchBox = styled(Box)({
    height: "34px",
    width: "100%",

    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#7e7e7e",
    fontSize: "12px",
    gap: "5px",
    "& .icon": {
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
    },
    "& .input": {
      flex: 1,
      "& input": {
        fontSize: "16px",
        width: "100%",
        border: "none",
        outline: "none",
      },
    },
  });
  return (
    <>
      <SearchBox>
        <Box className="icon">
          <SearchOutlinedIcon />
        </Box>
        <Box className="input">
          <input type="text" placeholder="Bạn cần tìm gì?" />
        </Box>
      </SearchBox>
    </>
  );
};
export default SearchForm;

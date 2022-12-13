import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchForm = () => {
  const timerSearchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!location.pathname.startsWith("/search")) {
      setSearchValue("");
      setIsLoading(false);
      clearTimeout(timerSearchRef.current);
    }
  }, [location]);
  useEffect(() => {
    if (searchValue) {
      setIsLoading(true);
      timerSearchRef.current = setTimeout(() => {
        setIsLoading(false);
        navigate(`/search?query=${searchValue}`);
      }, 300);
      return () => {
        setIsLoading(false);
        clearTimeout(timerSearchRef.current);
      };
    }
  }, [searchValue]);
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
      <Box
        sx={{
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
        }}
      >
        <Box
          className="icon"
          sx={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* {isLoading && <Oval stroke="#808080" width={"20px"} />} */}

          <SearchOutlinedIcon
            sx={{
              width: "20px",
              height: "20px",
            }}
          />
        </Box>
        <Box className="input">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Bạn cần tìm gì?"
          />
        </Box>
      </Box>
    </>
  );
};
export default SearchForm;

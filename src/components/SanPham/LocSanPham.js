import NorthEastIcon from "@mui/icons-material/NorthEast";
import PercentIcon from "@mui/icons-material/Percent";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const LocSanPham = ({ filterValue, setFilterValue }) => {
  const ButtonLoc = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#444444",
    borderRadius: "10px",
    backgroundColor: "#f3f4f6",
    border: "1px solid #e5e7eb",
    color: "#444",
    padding: "5px 10px",
    fontSize: "13px",
    cursor: "pointer",
    textTransform: "capitalize",

    "&.active": {
      border: "1px solid #d70018",
      background: "#fef2f2",
      color: "#d70018",
    },
  });
  const filterOption = [
    {
      title: "Giá cao - thấp",
      data: "-giaTien",
      icon: <SouthWestIcon />,
    },
    {
      title: "Giá thấp - cao",
      data: "giaTien",
      icon: <NorthEastIcon />,
    },
    {
      title: "Khuyến mãi hot",
      data: "-giamGia",
      icon: <PercentIcon />,
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Sắp xếp theo
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {filterOption.map((item, i) => (
            <ButtonLoc
              onClick={() => setFilterValue(item.data)}
              className={filterValue === item.data ? "active" : null}
              key={i}
            >
              {item.icon}
              <Typography
                sx={{
                  fontSize: "12px",
                }}
              >
                {item.title}
              </Typography>
            </ButtonLoc>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default LocSanPham;

import { Box, Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";

const GiaSanPham = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            height: "28px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #d70018",
            backgroundColor: "#fef2f2",
            color: "#d70018",
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Trả góp 0%
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: "5px",
        }}
      >
        <Typography
          sx={{
            color: "#D70018",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <NumericFormat
            value={Math.round(
              data.giaTien - (data.giaTien * data.giamGia) / 100
            )}
            displayType={"text"}
            thousandSeparator={"."}
            decimalSeparator={","}
            suffix={" ₫"}
          />
        </Typography>
        {data.giamGia > 0 && (
          <Typography
            sx={{
              color: "#707070",
              fontSize: "14px",
              fontWeight: "bold",
              textDecoration: "line-through",
            }}
          >
            <NumericFormat
              value={Math.round(data.giaTien)}
              displayType={"text"}
              thousandSeparator={"."}
              decimalSeparator={","}
              suffix={" ₫"}
            />
          </Typography>
        )}
      </Box>
    </>
  );
};
export default GiaSanPham;

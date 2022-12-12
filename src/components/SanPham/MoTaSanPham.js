import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
const MoTaSanPham = ({ data }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", lg: "70%" },
          borderRadius: "10px",
          boxShadow:
            "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {data.dacDiemNoiBat && (
          <Box
            sx={{
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",

              padding: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                color: "#d70018",
                textTransform: "uppercase",

                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              Đặc điểm nổi bật
            </Typography>
            <Box
              sx={{
                fontSize: "14px",
                color: "#4a4a4a",
                padding: "5px 0px",
              }}
            >
              <div
                className="content-html"
                style={{
                  overflow: "auto",
                  height: "100px",
                }}
                dangerouslySetInnerHTML={{ __html: data.dacDiemNoiBat }}
              />
            </Box>
          </Box>
        )}
        <Box
          sx={{
            maxHeight: !isReadMore ? "200px" : "unset",
            overflow: !isReadMore ? "hidden" : "unset",
            WebkitMaskImage: !isReadMore
              ? "linear-gradient(rgb(0, 0, 0) 60%, transparent)"
              : "unset",
          }}
        >
          <div
            className="content-html"
            dangerouslySetInnerHTML={{ __html: data.gioiThieu }}
          />
        </Box>
        {!isReadMore && (
          <Box
            onClick={() => setIsReadMore(true)}
            sx={{
              margin: "10px 0px",
              maxWidth: "335px",
              width: "100%",
              alignSelf: "center",
              textAlign: "center",
              backgroundColor: "#ffffff",
              fontSize: "14px",
              color: "#212529",
              borderRadius: "0 0 10px 10px",
              boxShadow:
                "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
              padding: "10px",
              cursor: "pointer",
              border: "1px solid transparent",
              "&:hover": {
                border: "1px solid #d70018",
                background: "#fef2f2",
                color: "#d70018",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Đọc thêm
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
        )}
        {isReadMore && (
          <Box
            onClick={() => setIsReadMore(false)}
            sx={{
              margin: "10px 0px",
              maxWidth: "335px",
              width: "100%",
              alignSelf: "center",
              textAlign: "center",
              backgroundColor: "#ffffff",
              fontSize: "14px",
              color: "#212529",
              borderRadius: "0 0 10px 10px",
              boxShadow:
                "0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
              padding: "10px",
              cursor: "pointer",
              border: "1px solid transparent",
              "&:hover": {
                border: "1px solid #d70018",
                background: "#fef2f2",
                color: "#d70018",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Thu gọn
              <KeyboardArrowUpIcon />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};
export default MoTaSanPham;

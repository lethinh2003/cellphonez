import HomeIcon from "@mui/icons-material/Home";
import {
  Backdrop,
  Box,
  Breadcrumbs,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const TraCuuDonHang = () => {
  const timerLoadingRef = useRef(null);
  const navigate = useNavigate();
  const [soDienThoai, setSoDienThoai] = useState("");
  const [maDonHang, setMaDonHang] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClickTraCuu = async () => {
    try {
      if (!soDienThoai || !maDonHang) {
        toast.error("Vui lòng nhập đầy đủ thông tin");
        return;
      }
      setIsLoading(true);
      const results = await axios.get(
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/donhang/check/?soDienThoai=${soDienThoai}&maDonHang=${maDonHang}`
      );
      const data = results.data;
      if (!data.data) {
        toast.error("Đơn hàng không tồn tại trong hệ thống");
      } else {
        if (data.data.tinhTrang) {
          toast.success("Đơn hàng đã được giao thành công");
        } else {
          toast.info("Đơn hàng đang được vận chuyển");
        }
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast.error(err.response.data.message);
    }
  };
  return (
    <>
      {isLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress
            sx={{
              color: "#d70018",
            }}
          />
        </Backdrop>
      )}

      <Box
        sx={{
          marginTop: "74px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Breadcrumbs
          separator="›"
          sx={{
            fontSize: "12px",
          }}
        >
          <Link to="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <HomeIcon
                sx={{
                  color: "#d70018",
                  width: "15px",
                  height: "15px",
                }}
              />

              <Typography
                sx={{
                  color: "#707070",
                  fontSize: "12px",
                }}
              >
                Trang chủ
              </Typography>
            </Box>
          </Link>
          <Typography
            sx={{
              color: "#707070",
              fontSize: "12px",
            }}
          >
            Tra cứu đơn hàng
          </Typography>
        </Breadcrumbs>
        <Box
          sx={{
            margin: "0 auto",
            maxWidth: "800px",
            width: "100%",
            borderRadius: "10px",

            fontSize: "14px",
            gap: "10px",
            display: "flex",
            background: "#f5f5f5",
            overflow: "hidden",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: "50%",
              position: "relative",
              height: { xs: "200px", md: "400px" },
            }}
          >
            <Box
              sx={{
                height: { xs: "400px", md: "800px" },
                width: "800px",
                position: "absolute",
                zIndex: 0,
                top: "-300px",
                left: "-571px",
                transform: "rotate(55deg)",
                background:
                  "linear-gradient(to bottom right,#fd2424 37%,#f5f5f5 70%)",
                opacity: "0.6",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                top: 33,
                left: 43,
                width: "200px",
                height: "200px",
              }}
            >
              <img
                src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Shipper.png"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                color: "#4a4a4a",
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
              Kiểm tra thông tin đơn hàng & tình trạng vận chuyển
            </Typography>
            <TextField
              label="Số điện thoại"
              variant="outlined"
              value={soDienThoai}
              onChange={(e) => setSoDienThoai(e.target.value)}
              size="small"
              sx={{
                backgroundColor: "#fff",
              }}
            />
            <TextField
              label="Mã đơn hàng"
              variant="outlined"
              size="small"
              value={maDonHang}
              onChange={(e) => setMaDonHang(e.target.value)}
              sx={{
                backgroundColor: "#fff",
              }}
            />
            <Box
              onClick={() => handleClickTraCuu()}
              sx={{
                backgroundColor: "#fd2424",
                borderRadius: "10px",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                maxWidth: "180px",
                width: "100%",
                alignSelf: "center",
              }}
            >
              Kiểm tra
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default TraCuuDonHang;

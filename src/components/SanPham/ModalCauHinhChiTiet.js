import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal, Typography } from "@mui/material";
const ModalCauHinhChiTiet = ({ data, isOpenModal, handleClickCloseModal }) => {
  return (
    <>
      <Modal
        open={isOpenModal}
        onClose={handleClickCloseModal}
        disableAutoFocus={true}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "600px",
            width: "100%",
            bgcolor: "#ffffff",

            boxShadow: 24,
            overflow: "hidden",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              background: "#d70018",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Thông số kỹ thuật
            </Typography>
            <Box
              onClick={handleClickCloseModal}
              sx={{
                background: "#ae0215",
                padding: "5px",
                borderRadius: "50%",
                cursor: "pointer",
                "&:hover": {
                  background: "#9b191e",
                },
              }}
            >
              <CloseIcon />
            </Box>
          </Box>
          <Box
            sx={{
              maxHeight: "500px",
              overflow: "auto",
              borderRadius: "10px",

              padding: "20px",
            }}
          >
            <Box
              sx={{
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {data &&
                data.data &&
                data.data.data.map((item, i) => (
                  <Box
                    key={i}
                    className="technical-item"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14px",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        width: "40%",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        width: "50%",
                      }}
                    >
                      {item.data}
                    </Typography>
                  </Box>
                ))}
            </Box>
          </Box>
          <Box
            sx={{
              background: "#f5f5f5",
              borderTop: "1px solid #dbdbdb",
              padding: "20px",
            }}
          >
            <Box
              onClick={handleClickCloseModal}
              sx={{
                background: "#c51f27",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                padding: "5px",
                borderRadius: "10px",
                "&:hover": {
                  background: "#9b191e",
                },
              }}
            >
              <CloseIcon />
              Đóng
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default ModalCauHinhChiTiet;

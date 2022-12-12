import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
const ModalChinhSua = ({
  item,
  thongTin,
  setThongTin,
  handleCloseModal,
  isOpenModal,
}) => {
  const [data, setData] = useState("");

  const [isHaveCauHinh, setIsHaveCauHinh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (thongTin) {
      setData(JSON.stringify(thongTin.data));
    }
  }, [thongTin]);
  const handleClickSave = async () => {
    try {
      if (!item) {
        return;
      }
      setIsLoading(true);
      const dataParse = JSON.parse(data);
      console.log(dataParse);
      let res;

      res = await axios.post(
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/cauhinh/edit`,
        {
          sanPham: item._id,
          data: dataParse,
        }
      );

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <>
      {item && (
        <>
          <Modal
            size="lg"
            show={isOpenModal}
            onHide={handleCloseModal}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Cấu hình chi tiết</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Data</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClickSave}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {isLoading && (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isLoading}
            >
              <CircularProgress color="info" />
            </Backdrop>
          )}
        </>
      )}
    </>
  );
};
export default ModalChinhSua;

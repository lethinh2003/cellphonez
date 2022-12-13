import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ModalChinhSua from "./ModalChinhSua";
const ModalCauHinh = ({ item }) => {
  const listDanhMuc = useSelector((state) => state.danhMuc);
  const [danhMucID, setDanhMucID] = useState(item.danhMuc._id);
  const [thongTin, setThongTin] = useState({});
  const [isHaveCauHinh, setIsHaveCauHinh] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (item) {
      checkCauHinhTonTai();
    }
  }, [item]);

  const checkCauHinhTonTai = async () => {
    try {
      if (!item) {
        return;
      }
      setIsLoading(true);
      let res;

      res = await axios.get(
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/cauhinh/check/${item._id}`
      );

      setIsLoading(false);
      setIsHaveCauHinh(true);
      setThongTin(res.data.data);
    } catch (err) {
      setIsHaveCauHinh(false);
      setIsLoading(false);
      if (err.response) {
        //toast.error(err.response.data.message);
      }
    }
  };

  const handleClickTaoCauHinh = async () => {
    try {
      if (!item) {
        return;
      }
      setIsLoading(true);
      let res;

      res = await axios.post(
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/cauhinh/`,
        {
          sanPham: item._id,
        }
      );

      setIsLoading(false);
      setIsHaveCauHinh(true);
      setThongTin(res.data.data);
    } catch (err) {
      setIsLoading(false);
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      {thongTin && (
        <ModalChinhSua
          item={item}
          isOpenModal={isOpenModal}
          handleCloseModal={handleCloseModal}
          thongTin={thongTin}
        />
      )}

      {isLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="info" />
        </Backdrop>
      )}

      {item && (
        <>
          <Form.Group className="mb-3">
            <Form.Label>Cấu hình chi tiết</Form.Label>
            <Form.Group className="mb-3">
              {isHaveCauHinh && (
                <Button variant="primary" onClick={() => setIsOpenModal(true)}>
                  Xem cấu hình
                </Button>
              )}
              {!isHaveCauHinh && (
                <Button
                  variant="primary"
                  onClick={() => handleClickTaoCauHinh()}
                >
                  Tạo cấu hình mới
                </Button>
              )}
            </Form.Group>
          </Form.Group>
        </>
      )}
    </>
  );
};
export default ModalCauHinh;

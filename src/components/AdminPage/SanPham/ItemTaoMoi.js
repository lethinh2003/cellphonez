import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const ItemTaoMoi = () => {
  const listDanhMuc = useSelector((state) => state.danhMuc);
  const dacDiemNoiBatRef = useRef();
  const gioiThieuRef = useRef();

  const [hang, setHang] = useState("");
  const [thongTinSanPhamText, setThongTinSanPhamText] = useState("");
  const [thongTinKhuyenMaiText, setThongTinKhuyenMaiText] = useState("");
  const [uuDaiThemText, setUuDaiThemText] = useState("");
  const [cauHinhChiTiet, setCauHinhChiTiet] = useState("");

  const [danhMucID, setDanhMucID] = useState("");
  const [tenSanPham, setTenSanPham] = useState("");
  const [linkAnhText, setLinkAnhText] = useState("");
  const [giaTien, setGiaTien] = useState(0);
  const [giamGia, setGiamGia] = useState(0);
  const [giaHienTai, setGiaHienTai] = useState(0);
  const [isSale, setIsSale] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (listDanhMuc.length > 0) {
      setDanhMucID(listDanhMuc[0]._id);
    }
  }, [listDanhMuc]);
  useEffect(() => {
    setGiaHienTai(giaTien - (giaTien * giamGia) / 100);
  }, [giamGia, giaTien]);

  const handleClickSubmit = async () => {
    try {
      const checkRightAdmin = localStorage.getItem("admin");
      if (!checkRightAdmin) {
        toast.error("Bạn không có quyền này");
        return;
      }
      setIsLoading(true);
      const linkAnh = linkAnhText.split("; ");
      const uuDaiThem = uuDaiThemText.split("; ");
      const thongTinKhuyenMai = thongTinKhuyenMaiText.split("; ");
      const thongTinSanPham = thongTinSanPhamText.split("; ");
      const dataParseCauHinh = JSON.parse(cauHinhChiTiet);

      const res = await axios.post(
        `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/admin/sanpham/create`,
        {
          danhMuc: danhMucID,
          tenSanPham,
          giaTien,
          linkAnh,
          giamGia,
          isSale,
          dacDiemNoiBat: dacDiemNoiBatRef.current,
          gioiThieu: gioiThieuRef.current,
          thongTinSanPham,
          uuDaiThem,
          thongTinKhuyenMai,
          hang,
          cauHinhChiTiet: dataParseCauHinh,
        }
      );
      setIsLoading(false);
      toast.info(res.data.message);
    } catch (err) {
      setIsLoading(false);
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };

  return (
    <>
      {isLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="info" />
        </Backdrop>
      )}

      <Box
        sx={{
          gap: "20px",
          width: "100%",

          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0px 0px 12px 1px #e2e2e2",
        }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              value={tenSanPham}
              onChange={(e) => setTenSanPham(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Giá niêm yết</Form.Label>
            <Form.Control
              type="number"
              value={giaTien}
              onChange={(e) => setGiaTien(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Giảm giá</Form.Label>
            <Form.Control
              type="number"
              value={giamGia}
              onChange={(e) => setGiamGia(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Giá hiện tại</Form.Label>
            <Form.Control type="number" value={giaHienTai} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cấu hình chi tiết</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={cauHinhChiTiet}
              onChange={(e) => setCauHinhChiTiet(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Link ảnh</Form.Label>
            <Form.Control
              type="text"
              value={linkAnhText}
              onChange={(e) => setLinkAnhText(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hot Sale</Form.Label>
            <Form.Select
              value={isSale}
              onChange={(e) => setIsSale(e.target.value)}
            >
              <option value={true}>Có</option>
              <option value={false}>Không</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Thông tin sản phẩm</Form.Label>
            <Form.Control
              type="text"
              value={thongTinSanPhamText}
              onChange={(e) => setThongTinSanPhamText(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Thông tin khuyến mãi</Form.Label>
            <Form.Control
              type="text"
              value={thongTinKhuyenMaiText}
              onChange={(e) => setThongTinKhuyenMaiText(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ưu đãi thêm</Form.Label>
            <Form.Control
              type="text"
              value={uuDaiThemText}
              onChange={(e) => setUuDaiThemText(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Danh mục</Form.Label>
            <Form.Select
              value={danhMucID}
              onChange={(e) => setDanhMucID(e.target.value)}
            >
              {listDanhMuc.map((item, i) => (
                <option key={item._id} value={item._id}>
                  {item.tenDanhMuc}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hãng</Form.Label>
            <Form.Control
              type="text"
              value={hang}
              onChange={(e) => setHang(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Đặc điểm nổi bật</Form.Label>

            <CKEditor
              editor={ClassicEditor}
              data={dacDiemNoiBatRef.current}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                dacDiemNoiBatRef.current = data;
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Giới thiệu</Form.Label>

            <CKEditor
              editor={ClassicEditor}
              data={gioiThieuRef.current}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                gioiThieuRef.current = data;
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            style={{
              opacity: isLoading ? 0.5 : 1,
              pointerEvents: isLoading ? "none" : "auto",
            }}
            onClick={handleClickSubmit}
          >
            Tạo mới
          </Button>
        </Form>
      </Box>
    </>
  );
};
export default ItemTaoMoi;

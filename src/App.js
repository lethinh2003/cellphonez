import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createStore } from "redux";
import "./App.css";
import AdminLayout from "./components/AdminLayout";
import SanPham from "./components/AdminPage/SanPham";
import TaoMoi from "./components/AdminPage/SanPham/TaoMoi";
import ThongTinSanPham from "./components/AdminPage/SanPham/ThongTinSanPham";
import TrangChu from "./components/AdminPage/TrangChu";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Cart from "./components/SanPham/Cart";
import SanPhamDetail from "./components/SanPham/SanPhamDetail";
import TatCaSanPham from "./components/SanPham/TatCaSanPham";
import TraCuuDonHang from "./components/TraCuuDonHang";
import ScrollToTop from "./customHooks/ScrollToTop";
import rootReducer from "./redux/reducers";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const queryClient = new QueryClient();
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      s400: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />

                  <Route
                    path="sanpham/:sanPhamSlug"
                    element={<SanPhamDetail />}
                  />
                  <Route
                    path="tat-ca-san-pham/:danhMuc"
                    element={<TatCaSanPham />}
                  />
                  <Route path="tra-cuu-don-hang" element={<TraCuuDonHang />} />
                  <Route path="cart" element={<Cart />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<TrangChu />} />
                  <Route path="sanpham" element={<SanPham />} />
                  <Route path="sanpham/create" element={<TaoMoi />} />
                  <Route
                    path="sanpham/:sanPhamID"
                    element={<ThongTinSanPham />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
          <ToastContainer
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            position="top-center"
          />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;

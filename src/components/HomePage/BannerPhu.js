import { Box, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useQuery } from "react-query";

const BannerPhu = () => {
  const Container = styled(Box)({
    boxShadow: "0px 0px 12px 2px #ccc",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "14px",
    display: "flex",

    flexDirection: "column",
    gap: "15px",
    height: "100%",
    flex: 1,
  });
  const BannerItem = styled(Box)({
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "10px",

    "& img": {
      width: "100%",
      height: "100%",

      borderRadius: "10px",
    },
  });

  const callDataApi = async () => {
    const results = await axios.get(
      `${process.env.REACT_APP_ENDPOINT_SERVER}/api/v1/system`
    );
    return results.data;
  };
  const getListQuery = useQuery("get-info-system", callDataApi, {
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
  const {
    data: dataQuery,
    isLoading,
    isFetching,
    isError: isErrorQuery,
    error,
  } = getListQuery;

  return (
    <>
      <Container
        sx={{
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
          }}
        >
          {isLoading &&
            Array.from({ length: 3 }).map((item, i) => (
              <BannerItem key={i}>
                <Skeleton variant="rounded" width={"100%"} height={"120px"} />
              </BannerItem>
            ))}
          {!isLoading &&
            dataQuery &&
            dataQuery.data &&
            dataQuery.data.linkAnhBannerPhu.length > 0 &&
            dataQuery.data.linkAnhBannerPhu.map((item, i) => {
              return (
                <BannerItem key={i}>
                  <Box component={"img"} src={item}></Box>
                </BannerItem>
              );
            })}
        </Box>
      </Container>
    </>
  );
};
export default BannerPhu;

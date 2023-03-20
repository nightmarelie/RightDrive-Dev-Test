import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FormatListBulleted, GridViewRounded } from "@mui/icons-material";

import { setView, setPage } from "../store";

import { IconButton, Card, Row } from "../components";
import { useGetCollectionsQuery } from "../utils";
import { Box } from "@material-ui/core";

export const CryptoCollection = () => {
  // const { data, error, isLoading } = useGetCollectionsQuery();
  const dispatch = useDispatch();
  const { page: currentPage, perPage, view } = useSelector((state) => state.ui);

  const isLoading = false;
  const data = {
    items: [
      {
        contractAddress: "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
        name: "MutantApeYachtClub",
        slug: "mutant-ape-yacht-club",
        imageUrl:
          "https://images.blur.io/_blur-prod/0x60e4d786628fea6478f785a6d7e704777c86a7c6/2265-e167b50a6fb1118f",
        totalSupply: 19462,
        numberOwners: 11519,
        floorPrice: {
          amount: "14.61",
          unit: "ETH",
        },
        floorPriceOneDay: {
          amount: "14.379",
          unit: "ETH",
        },
        floorPriceOneWeek: {
          amount: "14.379",
          unit: "ETH",
        },
        volumeFifteenMinutes: {
          amount: "14.6",
          unit: "ETH",
        },
        volumeOneDay: {
          amount: "3165.2961099999998",
          unit: "ETH",
        },
        volumeOneWeek: {
          amount: "16002.647980045322",
          unit: "ETH",
        },
        bestCollectionBid: {
          amount: "14.6",
          unit: "ETH",
        },
        totalCollectionBidValue: {
          amount: "25084.32",
          unit: "ETH",
        },
        traitFrequencies: null,
      },
      {
        contractAddress: "0xb7f7f6c52f2e2fdb1963eab30438024864c313f6",
        name: "Wrapped Cryptopunks",
        slug: "wrapped-cryptopunks",
        imageUrl:
          "https://images.blur.io/_blur-prod/0xb7f7f6c52f2e2fdb1963eab30438024864c313f6/6489-476d7464f76efc1b",
        totalSupply: 2259,
        numberOwners: 80,
        floorPrice: {
          amount: "66.78",
          unit: "ETH",
        },
        floorPriceOneDay: {
          amount: "66.51",
          unit: "ETH",
        },
        floorPriceOneWeek: {
          amount: "66.51",
          unit: "ETH",
        },
        volumeFifteenMinutes: {
          amount: "66.8",
          unit: "ETH",
        },
        volumeOneDay: {
          amount: "2139.4366999",
          unit: "ETH",
        },
        volumeOneWeek: {
          amount: "14670.0463579",
          unit: "ETH",
        },
        bestCollectionBid: {
          amount: "66.76",
          unit: "ETH",
        },
        totalCollectionBidValue: {
          amount: "25728.56",
          unit: "ETH",
        },
        traitFrequencies: null,
      },
      {
        contractAddress: "0xed5af388653567af2f388e6224dc7c4b3241c544",
        name: "Azuki",
        slug: "azuki",
        imageUrl:
          "https://images.blur.io/_blur-prod/0xed5af388653567af2f388e6224dc7c4b3241c544/4361-29b9f08af6d9c52f",
        totalSupply: 10000,
        numberOwners: 4886,
        floorPrice: {
          amount: "14.48",
          unit: "ETH",
        },
        floorPriceOneDay: {
          amount: "13.9888",
          unit: "ETH",
        },
        floorPriceOneWeek: {
          amount: "13.9888",
          unit: "ETH",
        },
        volumeFifteenMinutes: null,
        volumeOneDay: {
          amount: "1851.95239",
          unit: "ETH",
        },
        volumeOneWeek: {
          amount: "12226.124452999995",
          unit: "ETH",
        },
        bestCollectionBid: {
          amount: "14.39",
          unit: "ETH",
        },
        totalCollectionBidValue: {
          amount: "26345.96",
          unit: "ETH",
        },
        traitFrequencies: null,
      },
      {
        contractAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
        name: "BoredApeYachtClub",
        slug: "boredapeyachtclub",
        imageUrl:
          "https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/8321-69a4c46a6e8e5b07",
        totalSupply: 10000,
        numberOwners: 5804,
        floorPrice: {
          amount: "66.29",
          unit: "ETH",
        },
        floorPriceOneDay: {
          amount: "67.11",
          unit: "ETH",
        },
        floorPriceOneWeek: {
          amount: "67.11",
          unit: "ETH",
        },
        volumeFifteenMinutes: null,
        volumeOneDay: {
          amount: "1849.498911",
          unit: "ETH",
        },
        volumeOneWeek: {
          amount: "11941.394011",
          unit: "ETH",
        },
        bestCollectionBid: {
          amount: "65.65",
          unit: "ETH",
        },
        totalCollectionBidValue: {
          amount: "29444.19",
          unit: "ETH",
        },
        traitFrequencies: null,
      },
    ],
    meta: {
      total: 1000,
    },
  };

  const handleViewChange = useCallback(
    (view) => {
      dispatch(setView(view));
    },
    [dispatch]
  );

  const handlePaginationChange = useCallback(
    (pageNumber) => {
      dispatch(setPage(pageNumber));
    },
    [dispatch]
  );

  const renderItem = useCallback(
    (props) => {
      switch (view) {
        case "card": {
          return <Card {...props} />;
        }
        case "list": {
          return <Row {...props} />;
        }
        default:
          throw new Error("Invalid view");
      }
    },
    [view]
  );

  const renderList = useCallback(() => {
    switch (view) {
      case "card": {
        return (
          <Box
            component="ul"
            container
            gridTemplateColumns={{
              lg: `repeat(${perPage}, 1fr)`,
              sm: "repeat(1, 1fr)",
            }}
          >
            {data.items.map((props) => renderItem(props))}
          </Box>
        );
      }
      case "list": {
        return (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: "50%" }}>Name</TableCell>
                <TableCell sx={{ minWidth: "30%" }}>Price</TableCell>
                <TableCell>24 %</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.items.map((props) => renderItem(props))}
            </TableBody>
          </Table>
        );
      }
      default:
        throw new Error("Invalid view");
    }
  }, [data, view, renderItem, perPage]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Stack alignItems="center" gap={10} paddingY={10}>
      <Stack direction="row" gap={3}>
        <IconButton
          Icon={GridViewRounded}
          label="Grid View"
          onClick={() => handleViewChange("card")}
          size="40px"
        />
        <IconButton
          Icon={FormatListBulleted}
          label="List View"
          onClick={() => handleViewChange("list")}
          size="40px"
        />
      </Stack>
      {renderList()}
      <Pagination
        color="primary"
        count={Math.ceil(data.meta.total / perPage)}
        onChange={(_, pageNumber) => handlePaginationChange(pageNumber)}
        page={currentPage}
      />
    </Stack>
  );
};

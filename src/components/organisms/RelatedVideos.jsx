import { Box } from "@mui/material";
import { RelatedVideoCardItem } from "../molecules/RelatedVideoCardItem";

const data = [
  {
    imagePath: "AYUSHHAKHU.jpg",
    description:
      "One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description:
      "One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description:
      "One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description:
      "One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was, One of the big title it was",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
  {
    imagePath: "AYUSHHAKHU.jpg",
    description: "First Video!!",
    details: "One of the best video",
  },
];
export const RelatedVideos = ({ props }) => {
  return (
    <Box sx={{ marginTop: 2.5, marginLeft: 8 }}>
      {data.map((item, index) => (
        <RelatedVideoCardItem
          key={index}
          description={item.description}
          details={item.details}
          imagePath={item.imagePath}
        />
      ))}
    </Box>
  );
};

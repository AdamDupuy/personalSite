import {
    Button,
    Grid,
    Card,
    Box,
    CardMedia,
    Typography,
} from "@mui/material";

import image1 from "./Assets/griffithBeherit.png"

type Props = {
    imageName: string;
}

const ImageCard = (props: Props): any => {
    <div
    style={{
      display: "flex",

      justifyContent: "center",
    }}
    >
        <img src={image1} alt="propImage" height={"70%"} width={"70%"} />
    </div>
};

export default ImageCard;
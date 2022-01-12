import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IProps } from "./MyComponent";
var cardStyle = {
  display: "block",
  width: "30vw",
  transitionDuration: "0.3s",
  height: "35vw",
  margin: "30px",
};
const List: React.FC<IProps> = ({ laptop }) => {
  const renderList = (): JSX.Element[] => {
    return laptop.map((type) => {
      return (
        <div>
          <Card style={cardStyle} sx={{ maxWidth: 400 }}>
            <CardHeader title={type.model} />
            <CardMedia
              component="img"
              height="194"
              image={type.url}
              alt={type.model}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <div>Os : {type.os}</div>
                <div>Processor : {type.processor}</div>
                <div>price : {type.price}</div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    });
  };
  return (
    <>
      <h3> Top Best Laptops in India (2022) </h3>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {renderList()}
      </Grid>
    </>
  );
};
export default List;

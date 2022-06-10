import React from "react";
import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  Icon,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2" // we made an h6 tag but in Elemnts of browser you can see h2 tag
        gutterBottom
        color="textSecondary"
        align="center"
      >
        New notes
      </Typography>
      <Button
        onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}

        // disableElevation
      >
        Submit
      </Button>
      {/* <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      {/* <br />
      <AcUnitIcon color="primary" /> */}
    </Container>
  );
}

import React from "react";
import Typography from "@mui/material/Typography";

export default function Create() {
  return (
    <div>
      <Typography
        variant="h6"
        component="h2" // we made an h6 tag but in Elemnts of browser you can see h2 tag
        gutterBottom
        color="textSecondary"
        align="center"
      >
        New notes
      </Typography>
    </div>
  );
}

import { Typography } from "@mui/material";
import React from "react";

// Temporary component for our routes
function Temp({ content }) {
    // Get the route parameter 'id'
  //  const { id } = useParams();

    return (
        <>
            <Typography component="p">{content}</Typography>
            {/*<Typography component="p">{id ? `ID: ${id}` : ""}</Typography>*/}

        </>
    );
}

export default Temp;

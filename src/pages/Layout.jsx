import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header>
        <Typography variant="h3" color="initial">a7a name</Typography>
      </header>

      
      <Outlet />

      <footer>
        My Footer
      </footer>
    </div>
  );
}

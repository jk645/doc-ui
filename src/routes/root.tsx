import { Button } from "@mui/material";

export default function Root() {
  return (
    <Button
      onClick={() => {
        alert('YO!');
      }}
    >
      Click Me!
    </Button>
  );
}

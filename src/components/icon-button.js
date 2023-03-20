import { Button, Stack } from "@mui/material";

export function IconButton({ size, Icon, onClick }) {
  return (
    <Button variant="outlined" onClick={onClick}>
      <Stack
        justifyContent="center"
        alignItems="center"
        width={size}
        height={size}
        borderRadius={"10%"}
        fontSize={size}
      >
        <Icon />
      </Stack>
    </Button>
  );
}

import image from "../../Images/18.png";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

function Top(props) {
    return (
        <div>
            <Typography variant="h1" class="toph1">
            A new email client <br /> designed to keep you <br /> calm and focused
            </Typography>;
            <Box
            component="img"
            sx={{
            height: 400,
            maxHeight: { xs: 400, md: 400 },
            }}
            alt="Working on Laptop."
            src={image}
        />
        </div>
    );
}

export default Top;

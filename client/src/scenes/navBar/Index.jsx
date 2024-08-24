import { useState } from "react";
import { box, 
    IconButton, 
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery } from "@mui/material";
    import {
        Search,
        Message,
        DarkMode,
        LightMode,
        Notifications,
        Help,
        Menu,
        Close
    } from "@mui/icons-material"
    import { useDispatch, useSelector } from "react-redux";
    import { setMode, setLogout } from "state";
    import { useNavigate } from "react-router-dom"
    import FlexBetween from "components/FlexBetween";


const Navbar = () => {
    const [isMobileMenuTogggled, setIsMobileMenuTogggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery()
    return (
        <div>Navbar</div>
    )
}

export default Navbar
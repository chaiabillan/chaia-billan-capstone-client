import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const ScrollToTopOnMount = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0); // Scroll to the top on mount
    }, [pathname]);

    return null;
}

export default ScrollToTopOnMount
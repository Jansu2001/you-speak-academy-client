import { Outlet,useLocation } from "react-router-dom";
import Footer from "../Pages/SharedPage/Footer/Footer";
import Header from "../Pages/SharedPage/Header/Header";

const Main = () => {

    const location=useLocation()
    const noHeaderFooter=location.pathname.includes('login' ) ||location.pathname.includes('register' )
    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Main;
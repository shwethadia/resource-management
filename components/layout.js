import ActiveResource from "./activeresource";

const { default: Navbar } = require("./navbar")



const Layout =({children}) =>{


    return(


        <>
            <Navbar/>
            <ActiveResource/>
            {children}
        </>
    )
}

export default Layout;











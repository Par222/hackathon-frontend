import Sidebar from "./committee/Sidebar"

function Layout({children}){
    return(
        <div className="bg-tertiaryblue-100 text-tertiarywhite-50 flex flex-col min-h-screen">
            <Sidebar></Sidebar>
            {children}
        </div>
    )
}
export default Layout
import { useState } from "react";
import { Sheet } from "./ui/sheet";





export function AdmniSideBar() {


    // const [isOpen , setOpen ] = useState(true);


    return (


        <div className="drawer">
            <div className="drawer-content">
                <button className="drawer-toggle"> click to hide</button>
                Hello this is for the content of the page
            </div>

            <div className="drawer-side">
                <div className="drawer-overlay">
                    <h1>this is the drawer side </h1>
                    <ul>
                        <li>hey</li>
                        <li>bonjour</li>
                        <li>Ohayou</li>
                    </ul>
                </div>
            </div>

        </div>

        //         <>
        //             <div className="drawer">
        //   <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        //   <div className="drawer-content">
        //     {/* Page content here */}
        //     <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
        //   </div>
        //   <div className="drawer-side">
        //     <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        //     <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        //       {/* Sidebar content here */}
        //       <li><a>Sidebar Item 1</a></li>
        //       <li><a>Sidebar Item 2</a></li>
        //     </ul>
        //   </div>
        // </div>
        //         </>
    )
}
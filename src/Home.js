import React from "react";
import Navbar from "./Components/Navbar.tsx";
import Sidebar from "./Components/Sidebar.tsx";
import LogBar from "./Components/LogBar.tsx";
import Cards from "./Components/Cards.tsx";
import Map from "./Components/Map.tsx";
import Video from "./Components/Video.tsx";
import LineChartComponent from "./Components/Chart.tsx";

export default function Home() {
  return (
    <div>
          <nav className="fixed top-0 left-0 w-full z-50"> {/* Added z-50 */}
          <Navbar />
          </nav>
          <aside className="fixed top-0 left-0 h-full z-40"> {/* Added z-40 */}
          <Sidebar />
         </aside>
        


         <div className="ml-8 mt-12"
         
>          <Map/>

        </div>
         <LogBar />

         <div style={{ display: 'flex',  marginTop: '0px', marginLeft: '31px'}}>
              <Cards />
         </div>
        <Video/>
        <div>
        <LineChartComponent/>
        </div>
        
    </div>
  )
}

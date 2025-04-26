import MainSection from "./components/MainSection";
import { Navbar } from "./components/navBar";
import SidebarComponent from "./components/sideBar";


function App() {
   return (
      <div className="w-full h-full">
         <Navbar/>
         <div className="flex flex-row justify-center">
         <SidebarComponent/>
         <MainSection/>
         </div>
      </div>
   )
}

export default App;
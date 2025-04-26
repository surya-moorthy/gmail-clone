import { ChevronRight, Search, Settings, User } from "lucide-react"
import { ModeToggle } from "./toggle-mode"
import useOpenState from "@/store/store"

export const Navbar = () => {
    const open = useOpenState((state)=>state.open)
    const setOpen = useOpenState((state)=>state.SetOpen)
    console.log(open);
    return (
       <header className="flex flex-row justify-between p-4 h-32">
            <div className="flex justify-between py-4 gap-x-8 ">
                 <div className="small-navbar py-1" onClick={()=>setOpen()}>
                       <ChevronRight size={30}/>
                 </div>
                  
                  <p className="lg:text-2xl font-semibold md:text-xl">
                      Gmail Clone
                  </p>
            </div>
            <div id="search" className="navbar-dark">     
                    <Search/>
                    <input
                        className="w-full outline-none"
                        placeholder="search"/>
                   
            </div>
            <div className="flex flex-row gap-x-8 py-2 ">
                  <div className="small-navbar">
                  <ModeToggle/>
                  </div>
                 
                  <div className="py-1 cursor-pointer small-navbar">
                       <Settings size={26}/>
                  </div>
                  <div className="py-1 cursor-pointer">
                        <User size={26}/>
                  </div>
            </div>
       </header>
    )
}



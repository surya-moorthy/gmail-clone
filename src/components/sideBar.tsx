
import { Inbox ,Star,Clock,Send, PenIcon, ChevronLeft } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarProvider } from './ui/sidebar';
import { Button } from './ui/button';
import useOpenState from '@/store/store';


function SidebarComponent() {
 const open = useOpenState((state)=>(state.open)); 
 const setOpen = useOpenState((state)=>(state.SetOpen)); 
 const SetHidden = useOpenState(state=> state.SetHidden);
  return (
     <div>
          <SidebarProvider open={open}>
              <Sidebar variant='floating'>
                   <SidebarContent className="flex gap-y-4 p-4">
                         <div className='flex flex-row gap-x-6'>
                              <Button variant={'default'} className="p-7 text-base cursor-pointer gap-2 w-2/3" onClick={SetHidden}>
                                    <PenIcon/>
                                    Compose 
                              </Button>
                              <div className="flex items-center border-l-2 border-t-2 border-b-2 border-neutral-50" onClick={()=>setOpen()}>
                                   <ChevronLeft size={30}/>
                              </div>
                         </div>
                         {sidebarContents.map(content => {
                          return (
                            
                         <div className='flex flex-row gap-x-2 text-md cursor-pointer'>
                                 <content.icon size={24}/>
                                  <h2>{content.name}</h2>
                          </div>
                            
                          )
                         })}
                   </SidebarContent>
              </Sidebar>
          </SidebarProvider>
     </div>
  )
}

const sidebarContents = [
  {
    name : "inbox",
    icon :  Inbox,
    route : "/#inbox"
  },
  {
    name : "Starred",
    icon :  Star,
    route : "/#starred"
  },
  {
    name : "Snoozed",
    icon :  Clock,
    route : "/#snoozed"
  },
  {
    name : "Sent",
    icon :  Send,
    route : "/#sent"
  },

]

export default SidebarComponent;

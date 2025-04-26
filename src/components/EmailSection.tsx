import useOpenState from '@/store/store'
import { X } from 'lucide-react';

export const EmailSection = () => {  
     const Hidden = useOpenState(state=> state.hidden);
     const SetHidden = useOpenState(state=> state.SetHidden);
  return (
           <div className='bg-neutral-400 rounded-lg text-black dark:bg-neutral-900 dark:text-neutral-50'>
              <div className={`flex flex-col lg:h-[400px] lg:w-[500px]  ${Hidden ? 'hidden' : 'block'} p-3 rounded-lg`}>
                <div className='flex justify-end cursor-pointer' onClick={SetHidden} >
                    <X />
                </div>
                <input type="text" placeholder='To' className='border-b-2 p-1  '/>
                <input type="text" placeholder='Subject' className='border-b-2 p-1'/>
                <textarea className='h-[300px] ' ></textarea>
            </div>
           </div>
)
}

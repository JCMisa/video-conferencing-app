"use client";

import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

const MeetingSetup = ({setIsSetupComplete}: {setIsSetupComplete: (value: boolean) => void}) => {
    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

    const call = useCall();

    const router = useRouter();
    const {user} = useUser();

    if(!call) {
        throw new Error("use call must be used within stream call component");
        
    }

    useEffect(() => {
        if(isMicCamToggledOn) {
            call?.camera.disable();
            call?.microphone.disable();
        } else {
            call?.camera.enable();
            call?.microphone.enable();
        }
    }, [isMicCamToggledOn, call?.camera, call?.microphone])

  return (
    <>
        <button className='absolute top-2 left-2 rounded px-5 py-3 text-sky-2 bg-blue-1 hover:scale-90 z-10' onClick={() => router.back()}>Go Back</button>
        <p className='absolute top-2 right-2 text-lg text-sky-1 z-10'>{user?.username?.toUpperCase()}</p>
        <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white bg-setup bg-cover bg-center bg-no-repeat'>
            <div className=" backdrop-brightness-50 w-full h-full flex justify-center items-center flex-col">    
                <h1 className='text-2xl font-bold'>Setup</h1>
                <VideoPreview />
                <div className='flex h-16 items-center justify-center gap-3'>
                    <label className='flex items-center justify-center gap-2 font-medium'>
                        <input type="checkbox"
                            checked={isMicCamToggledOn}
                            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
                        />
                        Join with mic and camera off
                    </label>
                    <DeviceSettings />
                </div>
                <Button className='rounded-md bg-green-500 px-4 py-2.5' onClick={() => {
                    call.join();

                    setIsSetupComplete(true);
                }}>
                    Join Meeting
                </Button>
            </div>
        </div>
    </>
  )
}

export default MeetingSetup
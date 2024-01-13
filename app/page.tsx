"use client"
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Camera, Divide, FlipHorizontal, MoonIcon, PersonStanding, SunIcon, Video, Volume2 } from 'lucide-react';
import { Rings } from 'react-loader-spinner';
import { toast } from 'sonner';

type Props = {};

const HomePage = (props: Props) => {
  // To show the object red and green
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // State variables
  const [mirrored, setMirrored] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [autoRecordEnabled, setAutoRecordEnabled] = useState<boolean>(false);

  return (
    <div className='flex h-screen'>
      {/* Left division - webcam and Canvas */}
      <div className='relative'>
        <div className='relative h-screen w-full'>
          <Webcam
            ref={webcamRef}
            mirrored={mirrored}
            className='h-full w-full object-contain p-2'
          />
          <canvas
            ref={canvasRef}
            className='absolute top-0 left-0 h-full w-full object-contain'
          ></canvas>
        </div>
      </div>

      {/* Right division - container for button panel and wiki section */}
      <div className='flex flex-row flex-1'>
        <div className='border-primary/5 border-2 max-w-xs flex flex-col gap-2 justify-between shadow-md rounded-md p-4'>
          {/* Top section */}
          <div className='flex flex-col gap-2'>
            <ModeToggle />
            <Button variant={'outline'} size={'icon'} onClick={() => {
                setMirrored((prev) => !prev);
              }}><FlipHorizontal /></Button>
            <Separator className='my-2' />
          </div>

          {/* Middle section */}
          <div className='flex flex-col gap-2'>
            <Separator className='my-2' />
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={userPromptScreenshot}
            >
              <Camera />
            </Button>
            <Button
              variant={isRecording ? 'destructive' : 'outline'}
              size={'icon'}
              onClick={userPromptRecord}
            >
              <Video />
            </Button>
            <Separator className='my-2' />
            <Button
              variant={autoRecordEnabled ? 'destructive' : 'outline'}
              size={'icon'}
              onClick={toggleAutoRecord}
            >
              {autoRecordEnabled ? (
                <Rings color='white' height={45} />
              ) : (
                <PersonStanding />
              )}
            </Button>
          </div>

          {/* Bottom section */}
          <div className='flex flex-col gap-2'>
            <Separator className='my-2' />
          </div>
        </div>

        <div className='h-full flex-1 py-4 px-2 overflow-y-scroll'>
          {/* Content in the right division */}
        </div>
      </div>
    </div>
  );

  function userPromptScreenshot() {
    // Take a screenshot and save to download
  }

  function userPromptRecord() {
    // Implement recording functionality
  }

  function toggleAutoRecord() {
    // Implement auto-record toggle
    if(autoRecordEnabled) {
      setAutoRecordEnabled(false);
      toast("autorecord disabled")
    }
    else{
      setAutoRecordEnabled(true)
      toast("autorecord enabled")
    } 
  }
};

export default HomePage;

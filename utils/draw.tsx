import { DetectedObject, ObjectDetection } from '@tensorflow-models/coco-ssd';

//mirrored,predictions,canvasRef.current?.getContext('2d')

export function drawOnCanvas( mirrored:Boolean, 
    predictions: DetectedObject[],
    ctx: CanvasRenderingContext2D | null | undefined,
    ){
        predictions.forEach((detectobject: DetectedObject)=>{
            const { class:name, bbox, score} = detectobject;
            const [x,y,width,height] = bbox;
            if(ctx){
                ctx.beginPath();

                //style
                //if person then red and any other object green
                ctx.fillStyle = name === 'person' ? '#FF0F0F' : '#00B612'
                ctx.globalAlpha = 0.4

                mirrored?  ctx.roundRect(ctx.canvas.width-x,y,-width,height,8) : ctx.roundRect(x,y,width,height,8);
                
                //fill function to full the rectengle
                ctx.fill();
                
                //text styling
                ctx.font = "12px Courier New"
                ctx.globalAlpha = 1;
                ctx.fillStyle = 'black'

                mirrored? ctx.fillText(name,ctx.canvas.width-x-width + 10 ,y+20) : ctx.fillText(name,x+10,y+20)


            }
        })
}
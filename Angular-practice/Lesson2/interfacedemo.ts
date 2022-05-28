namespace interfacedemo
{
    interface INotification
    {
        SMSNotify():void;
        EmailNotify():void;
    }

    class VideoChannel implements INotification{
        UploadVideo():void{
            console.log("Video uploaded!!!");
        }
        SMSNotify(): void {
            console.log("SMS sent -- Video Uploaded");    
        }
        EmailNotify(): void {
            console.log("Email sent -- Video Uploaded");
        }
    }

    let obj = new VideoChannel();
    obj.UploadVideo();
    obj.EmailNotify();
    obj.SMSNotify();
    
}
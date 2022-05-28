var interfacedemo;
(function (interfacedemo) {
    var VideoChannel = /** @class */ (function () {
        function VideoChannel() {
        }
        VideoChannel.prototype.UploadVideo = function () {
            console.log("Video uploaded!!!");
        };
        VideoChannel.prototype.SMSNotify = function () {
            console.log("SMS sent -- Video Uploaded");
        };
        VideoChannel.prototype.EmailNotify = function () {
            console.log("Email sent -- Video Uploaded");
        };
        return VideoChannel;
    }());
    var obj = new VideoChannel();
    obj.UploadVideo();
    obj.EmailNotify();
    obj.SMSNotify();
})(interfacedemo || (interfacedemo = {}));

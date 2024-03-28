// export const images = {
//   loginBg: require("./images/Capture3.PNG"),
//   summaryImages: {
//     totalBook: require("./images/Capture3.PNG"),
//     sold: require("./images/Capture3.PNG"),
//     cancel: require("./images/Capture3.PNG"),
//   },
//   userProfile: require("./images/Capture3.PNG"),
//   bookingImage: require("./images/Capture3.PNG"),
//   logo: require("./images/logoblack.jpg"),
// };

const assets = {
  images: {
    //logo: require("./images/logoblack.jpg"),
    logo: import("./images/NewLogoWithoutWhiteBg.png"), //
    
   // loginBg: import("./images/Capture3.PNG"),
  },
  sounds: {
    loginsound: import("./sounds/message.mp3"),
    //logo: require('./images/logoblack.jpg'),
  },
};

export default assets;

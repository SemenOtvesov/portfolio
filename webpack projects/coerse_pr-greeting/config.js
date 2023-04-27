/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "http://i.picresize.com/images/2015/07/23/YeSBP.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Wonderland Role Play";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"


You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/dancingstars.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/alice.jpg",
	"backgrounds/images/alice02.jpg",
	"backgrounds/images/alice03.jpg",
        "backgrounds/images/alice04.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
        {youtube: "93ASUImTedo", name: "Latch - Disclosure"},
	{youtube: "YqeW9_5kURI", name: "Lean On - (Dj Snake)"},
        {youtube: "OSW2zeM3yLU", name: "Odd look - Kavinsky (The Weekend)"},
        {youtube: "Tf1kGyppBVE", name: "I got you - Duke Demont"},
        {youtube: "N-EXMpWuUr8", name: "You & Me - Disclosure (Flume remix)"}           
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Welcome to Wonderland Role Play!",
"Make friends, follow rules & have fun!",
"Be sure to visit our forums at WonderlandDarkRP.enjin.com!",
"Wonderland Owners are, Lakoosha, Exhume & MissKitten",
"Remember to be kind and respect others!",
"Type !MOTD in your chat to view the rules!",
"Donate to become a VIP member and have your own Custom Model and weapons!"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
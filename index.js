const allVideos = document.querySelectorAll("span.style-scope.ytd-thumbnail-overlay-time-status-renderer") //Selecting times from videos
let allTimes = [];

allVideos.forEach(video => allTimes.push(video.innerText)); //Adding times of all videos to an array

const totalTime = allTimes.reduce((accumulator, currentValue) => {
    const sp = currentValue.split(":").reverse().map(Number);
    let total = sp[0];
    total += sp[1] * 60;
    total += sp[2] ? sp[2] * 3600 : 0; //If video has HH(hours) element it is converted to seconds and added to total
    return accumulator + total
}, 0) //Returns total duration of a playlist in seconds

//Function to convert time in seconds to HH:MM:SS format
function timeFromSec(sec) {
    let hours = Math.floor(sec / 3600);
    let min = Math.floor((sec % 3600) / 60);
    let seconds = sec % 60;
    return `${hours} : ${min} : ${seconds}`
}

console.log(timeFromSec(totalTime))
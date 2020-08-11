const videos = [
  {
    videoImage:
      "https://i5.walmartimages.com/asr/3e6983b1-4466-4eb2-8f49-b579c83f9bed_1.335c02515b701a9114223048b5d396e4.jpeg",
    profilePic:
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-144736,resizemode-1,msid-69037337/small-biz/startups/newsbuzz/fraud-is-only-possible-if-user-grants-access-oldrich-mller-coo-anydesk/oldrich-muller.jpg",
    name: "Toxicity con el pollo",
    channelName: "Canciones de Jero"
  }
]

const $videosSection = document.querySelector("section")
const $newVideoForm = document.querySelector("form")
const $videoImageInput = $newVideoForm.querySelector("#video-image")
const $videoProfilePic = $newVideoForm.querySelector("#profile-pic")
const $videoName = $newVideoForm.querySelector("#video-name")
const $videoChannel = $newVideoForm.querySelector("#chanel-name")

$newVideoForm.onsubmit = function (event) {
  event.preventDefault()
  videos.push({
    videoImage: $videoImageInput.value,
    profilePic: $videoProfilePic.value,
    name: $videoName.value,
    channelName: $videoChannel.value
  })
  $videoImageInput.value = ""
  $videoProfilePic.value = ""
  $videoName.value = ""
  $videoChannel.value = ""
  printVideos()
}

function printVideos() {
  $videosSection.innerHTML = ""
  videos.forEach(video => {
    $videosSection.innerHTML += `
    <article>
    <img
      src="${video.videoImage}"
      alt="${video.name}"
    />
    <div>
      <div>
        <img
          src="${video.profilePic}"
          alt="user"
        />
      </div>
      <div>
        <h4>${video.name}</h4>
        <small>${video.channelName}</small>
        <br />
        <small>19.999 visualizaciones · hace 1 hora</small>
      </div>
    </div>
  </article>
    `
  })
}

printVideos()

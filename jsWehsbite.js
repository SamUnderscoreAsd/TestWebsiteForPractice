const button1 = document.querySelector("#button1");
const text = document.querySelector("#text");
const image = document.querySelector("#image");
let index = 0;

button1.onclick = nextPicture;

const images = ["https://live.staticflickr.com/2039/1834924821_23c397a1d0_b.jpg","https://i.redd.it/presidential-primates-v0-pr41htu2wi8a1.jpg?width=1664&format=pjpg&auto=webp&s=f88a022b64b8e3e792d1e72c61687d47eb283786",
                "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/95/5e/11955e64-e23e-555c-f54f-ea66feb8fd4a/5063341954734_cover.jpg/1200x1200bf-60.jpg"];

const textArry = ["Meet Banana Bob, the monkey with a peeling sense of humor, running for president on a platform of free bananas for all – because a happy monkey is a well-fed monkey!",
                    "Meet Furious Frank, the no-nonsense monkey running for president. His campaign is fueled by a rage against the ordinary, promising to toss out tradition like a banana peel. Get ready for a political revolution – this monkey means business, and he won't monkey around with your expectations!",
                    "Vote for Jumpy Jim, the high-energy contender in this election. His promise? To turn the White House into a giant jungle gym – because who needs a boring oval office when you can have monkey bars?"];

function nextPicture(){

    if(index < images.length-1){
        index++;
        text.innerText= textArry[index];
        image.src = images[index];
    }
    else{
        text.innerText = textArry[0];
        image.src = images[0];
        index = 0;
    }
}
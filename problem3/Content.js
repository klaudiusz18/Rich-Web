//array of images
let dogImages = [
    "https://cdn.pixabay.com/photo/2014/03/14/20/13/dog-287420_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_960_720.jpg",
	"https://cdn.pixabay.com/photo/2020/11/12/15/45/dog-5735837_960_720.jpg"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * dogImages.length)
    imgs[i].src = dogImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are cool, but dogs are better.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about good dogs.";
for (elt of p) {
    elt.style['background-color'] = '#0000FF';
}
}


// changing the headers name to click me, just the clickable link by using class name, so that not every h3 tag will get changed. Only the ones on the home page when u search for something
const headers2 = document.getElementsByClassName("LC20lb MBeuO DKV0Md");
for (let i = 0; i < headers2.length; i++){
    headers2[i].innerText = "click me!! ";
}

document.body.style.transform = 'rotate(180deg)';
document.body.style.backgroundColor = '#add8e6';






const quotes=document.getElementById("quotes")
const author=document.getElementById("author")
const newQuotes=document.getElementById("newQ")
const tweetMe=document.getElementById("tweetMe")
let realData="";

const tweetNow=()=>{
    let tweetPost=`https://twitter.com/intent/tweet?text=${quotesData.text}${quotesData.author}`;
    window.open(tweetPost);
}

const getNewQuotes=()=>{
    let rNum=Math.floor(Math.random()*20);
    quotesData=realData[rNum];
    quotes.innerText=`${quotesData.text}`;
    quotes.innerText=`${realData[rNum].text}`;
    author.innerText=`${realData[rNum].author}`;

    // console.log(realData[rNum].author);
};
const getQuotes=async()=>{
    const api="https://type.fit/api/quotes";
    try {
        let data=await fetch(api);
        realData=await data.json();

        getNewQuotes();
        // console.log(realData.length);
        // console.log(realData[2].author);
    } catch (error) {
        
    }
}
tweetMe.addEventListener("click",tweetNow);
newQuotes.addEventListener("click",getNewQuotes);
getQuotes();
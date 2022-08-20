console.log("Let's get this party started!");
//gets a random gif and returns the URL
function addGif(gifData){

    let size = gifData.length;
    console.log(size);
    
    let randSpot = Math.floor(Math.random()*size);
    console.log(randSpot);
    console.log(gifData[randSpot]);
    return gifData[randSpot].embed_url;
    
    }

//submit gif logic   
document.querySelector("#GIFForm").addEventListener("submit",


async function findGif(event){
    
    event.preventDefault();
    const inputText = document.querySelector('#GIFText').value;
    console.log(inputText);
    let returnObj = await axios.get(`http://api.giphy.com/v1/gifs/search?`,
    {params: {api_key: 'be4gZg3wRRiOEaduFoJWDRoYDzXg48Om',
        q: inputText
    }}
    );
    console.log(returnObj.data.data);

    let newGif = document.createElement('li');
    newGif.innerHTML = `
    <img src="${addGif(returnObj.data.data)}" >
    `;
   document.querySelector('#GIFList').append(newGif);
   // be4gZg3wRRiOEaduFoJWDRoYDzXg48Om

});

//remove button
document.querySelector("#RemoveButton").addEventListener("click", function(){
    document.querySelector('#GIFList').replaceChildren();

});
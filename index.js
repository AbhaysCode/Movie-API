const showResults = async () => {
    try{
    const movie = document.getElementById("Movie").value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${movie}`);
    const imgCont = document.getElementsByClassName("img-container")[0];
    imgCont.innerHTML=""; 
    for(let i=0;i<=res.data.length;i++){
        imgCont.innerHTML = imgCont.innerHTML+ `<img src="${res.data[i].show.image.medium}" alt="" srcset=""> `
    }
    console.log(imgCont.innerHTML);
    }
    catch(e){
        console.log("Error is",e);
    }
    return false;
}
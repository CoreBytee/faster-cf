async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



// Call start
(async() => {
    console.log("hi")
    console.log(document.location.href + "/file") 
    document.location = document.location.href + "/file"
    await sleep(1000)
    document.location = document.location.href.split("download")[0]
})();
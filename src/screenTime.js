function gettime(){
    return new Date().getTime();
}

var start =  gettime();

var end = gettime();

function screentime(videoLength){
    var duration = (end - start);
    
    if(duration < videoLength){
        console.log("")
    }
}


// agr user
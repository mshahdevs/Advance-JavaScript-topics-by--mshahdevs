let counter = 0;
function getData() {
    console.log("fetching Data" + counter++);
}

function myDebounce(call, delay) {
    let timer;
    return function (...args) {
        if (timer)  clearTimeout(timer);
          setTimeout(() => {
                call();
            }, delay);
        }
    
}

const betterFunction = myDebounce(getData, 3000)


// function getClick(){
//     console.log("User typing: " + counter++ );
// }

//  function mygetDebounce(nameFunc,dely){
//     let time;
//     return function (...args){
//         if(time)  clearTimeout(time);
//         setTimeout(() => {
//             nameFunc();
//         }, dely);
//     }
// }

// const debouncedClick = mygetDebounce(getClick, 3000);
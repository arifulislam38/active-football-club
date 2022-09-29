const addToLocal = value =>{
    const {id, time} = value;
    let localStorageData = {};

    const storedLocal = localStorage.getItem('Exercise-time');
    if(storedLocal){
        localStorageData = JSON.parse(storedLocal);
    }

    let quantity = localStorageData[id];
    if(quantity){
        localStorageData[id] =quantity +time;
    }
    else{
        localStorageData[id] = time;
    }
    localStorage.setItem('Exercise-time', JSON.stringify(localStorageData));
}

const getLocalStorage = () =>{
    let getLocalStorage = {};

    //get the shopping cart from local storage
    const getStorage = localStorage.getItem('Exercise-time');
    if(getStorage){
        getLocalStorage = JSON.parse(getStorage);
    }
    return getLocalStorage;
}


export {addToLocal, getLocalStorage};
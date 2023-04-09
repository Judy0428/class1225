const firebaseConfig = {
    apiKey: "AIzaSyDK9pfbd0h9zX4-jNTS8d1MpkKigpuhMTg",
    authDomain: "web-cakestore.firebaseapp.com",
    databaseURL: "https://web-cakestore-default-rtdb.firebaseio.com",
    projectId: "web-cakestore",
    storageBucket: "web-cakestore.appspot.com",
    messagingSenderId: "707663991738",
    appId: "1:707663991738:web:cc747aeaa1bc43717e4383"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

// ; (async () => {
//     let result = await write('BBB', 'test')
//     console.log(result)

//     let response = await read('test')
//     console.log(response)

//     listen('test', (value) => {
//         console.log(value)
//     })
// })()

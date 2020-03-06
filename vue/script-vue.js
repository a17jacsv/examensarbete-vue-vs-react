//JavaScript-file for the implementation of the application with Vue.js

//Header
var header = new Vue({
    el: "#header",
    data: {
        header: "Enkel lista",
    }
});

//List
var list = new Vue({
    el: '#list',
    data: {
        items: [
            { message: '1' },
            { message: '2' },
            { message: '3' },
            { message: '4' },
            { message: '5' },
            { message: '6' },
            { message: '7' },
            { message: '8' },
            { message: '9' },
            { message: '10' }
        ]
    }
})

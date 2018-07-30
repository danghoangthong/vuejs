// var data = {
//     count : 0
// };
Vue.component('tdc-component',{
    template: '<button v-on:click="count+=1"> {{count}} </button>',
    data: function () {
        return {
            count:0
        };
    },
})
    var app = new Vue({
        el: '#app',
    });
Vue.component('fruit-component', {
    props: ['fruit'],
    template: '<li>{{ fruit.text }}</li>'
})
var app1 = new Vue({
    el: '#app1',
    data: {
        fruit: [
            {id: 0, text: 'orange'},
            {id: 1, text: 'lemon'},
            {id: 2, text: 'something else'},
        ]
    }
})

Vue.component('child', {
    props: ['message'],
    template: '<h1>{{ message }}</h1>',

});
Vue.component('child1', {
    props: ['mySay'],
    template: '<h1>{{ typeof(mySay) }}</h1>',

});
Vue.component('child2', {
    props: ['mySay'],
    data : function () {
        return { dataSay : this.mySay + " This is dataSay!"};
    },
    template: '<h1>{{ dataSay }}</h1>',

});
var app3 = new Vue({
    el: '#app3',
    data: {
        message: 'this is mess',
    }
});

Vue.component('child4', {
    props: ['message4'],
    template: '<h1>{{ message4 }}</h1>',

});
var app4 = new Vue({
    el: '#app4',
    data: {
        message4: 'this is mess',
    }
});

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Hello'
    },
    computed: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})



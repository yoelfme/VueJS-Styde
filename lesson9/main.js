var vm = new Vue({
    el: 'body',
    data: {
        notes: [
            {
                note: 'Laravel 5.1 es LTS',
                category: 'Laravel'
            },
            {
                note: 'Laravel 5.2 es la ultima version',
                category: 'Laravel'
            },
            {
                note: '@click se utiliza como un alias de v-on:click',
                category: 'Vue.js'
            }
        ]
    }
})
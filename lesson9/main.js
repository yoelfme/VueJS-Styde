function findById(items, id) {
    for (var i in items) {
        if (items[i].id == id) {
            return items[i];
        }
    }

    return null;
}

Vue.filter('category', function (id) {
    
});

var vm = new Vue({
    el: 'body',
    data: {
        notes: [
            {
                note: 'Laravel 5.1 es LTS',
                category_id: 1
            },
            {
                note: 'Laravel 5.2 es la ultima version',
                category_id: 1
            },
            {
                note: '@click se utiliza como un alias de v-on:click',
                category_id: 2
            }
        ],
        categories: [
            {
                id: 1,
                name: 'Laravel'
            },
            {
                id: 2,
                name: 'Vue.js'
            }
        ]
    },    
    filters: {
        category: function (id) {
            var category =  findById(this.categories, id)


            return category != null ? category.name : 'Sin categoria';
        }
    }
})
function findById(items, id) {
    for (var i in items) {
        if (items[i].id == id) {
            return items[i];
        }
    }

    return null;
}

Vue.filter('category', function (id) {
    var category =  findById(this.categories, id)

    return category != null ? category.name : 'Sin categoria';
})

Vue.component('select-category', {
    template: '#select_category_tpl',
    props: ['categories', 'id']
});

Vue.component('note-row', {
    template: '#note_row_tpl',
    props: ['note', 'categories'],
    data: function () {
        return {
            editing: false
        };
    },
    methods: {
        remove: function () {
            this.$parent.notes.$remove(this.note);
        },
        edit: function () {
            this.editing = true;
        },
        update: function () {
            this.editing = false;
        }
    }
});

var vm = new Vue({
    el: 'body',
    data: {
        new_note: {
            note: '',
            category_id: ''
        },
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
    methods: {
        createNote: function () {
            this.notes.push(this.new_note);

            this.new_note = {note: '', category_id: ''}
        }
    },
    filters: {
    }
})
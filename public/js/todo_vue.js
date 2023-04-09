const { createApp } = Vue
createApp({
    data() {
        return {
            storageKey: 'todo',
            items: [],
            api: 'https://book.niceinfos.com/frontend/api/'
        }
    },
    methods: {
        addItem() {
            if (!this.valid()) {
                this.reset();
                return;
            }
            // 新增資料
            this.items.push({
                status: 'pending',
                value: this.getName()
            })
            this.reset();
            this.save();
        },
        getName() {
            if (this.$refs.itemName) {
                return this.$refs.itemName.value;
            }
            return '';
        },
        valid() {
            return (this.getName());
        },
        reset() {
            let itemName = this.$refs.itemName;
            if (itemName) {
                itemName.value = '';
                itemName.focus();
            }
        },
        changeStatus(index) {
            let item = this.items[index];
            if (!item) {
                return;
            }
            let status = this.items[index].status == 'pending' ? 'done' : 'pending';
            this.items[index].status = status;
            this.save();
            console.table(this.items);
        },
        removeItem(index) {
            this.items.splice(index, 1);
            this.save();
        },
        restore() {
            // try {
            //     let todo = localStorage.getItem(this.storageKey);
            //     if (!todo) {
            //         todo = [];
            //     } else {
            //         todo = JSON.parse(todo);
            //     }
            //     this.items = todo;
            // } catch (e) {
            //     this.items = [];
            // }
        },
        save() {
            // let data = JSON.stringify(this.items);
            // localStorage.setItem(this.storageKey, data);
            write(this.items, 'todo');
        },

        doSaveCloud() {
            let uid = prompt('請輸入 uid');
            if (!uid) {
                return;
            }

            let parmas = {
                action: 'todo',
                uid: uid,
                data: this.items
            }

            let options = {
                method: 'POST'
            }
        }
    },
    mounted() {
        this.restore();
        listen('todo', (value) => {
            console.table(value);
            if (!value) {
                value = [];
            }
            this.items = value;
        })
    }
}).mount('#app')
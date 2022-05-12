import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import Sqlite from 'nativescript-sqlite'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        database: null,
        data: []
    },
    mutations: {
        INIT_DATABASE(state, data) {
            state.database = data.database;
        },
        GOT_TASKS(state, data) {
            state.data = [];
            for (var i = 0; i < data.data.length; i++) {
                state.data.push({
                    title: data.data[i][0],
                    completed: data.data[i][1]
                });
            }
        },
        TASK_SAVED(state, data) {
            state.data.push({
                title: data.data.title,
                completed: data.data.completed
            });
        },
    },
    actions: {
        init(context) {
            (new Sqlite("my.db")).then(db => {
                db.execSQL("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed TEXT)").then(id => {
                    context.commit("INIT_DATABASE", { database: db });
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                });
            }, error => {
                console.log("OPEN DB ERROR", error);
            });
        },
        insert(context, data) {
            context.state.database.execSQL("INSERT INTO task (title, completed) VALUES (?, ?)", [data.title, data.completed]).then(() => {
                context.commit("TASK_SAVED", { data: data });
            }, error => {
                console.log("INSERT ERROR", error);
            });
        },
        getAllTasks(context) {
            context.state.database.all("SELECT title, completed FROM task", []).then(result => {
                context.commit("GOT_TASKS", { data: result });
            }, error => {
                console.log("SELECT ERROR", error);
            });
        }
    },
    getters: {
        tasks(state) {
            return state.data
        }
    }
});

export default store
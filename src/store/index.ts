import {defineStore} from 'pinia'

const useStore = defineStore('index', {
    state: () => {
        return {
            counter: 0
        }
    },

    actions: {
        increment() {
            this.counter++
        },

        decrement() {
            this.counter--
        }
    }
})

export default useStore
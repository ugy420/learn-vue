export default{
    template: `
        <form v-on:submit.prevent="add">
        <div class="border border-gray-600 text-black">
            <input v-model="newAssignment" placeholder="New assignment..." class="p-2">
            <button class="bg-white p-2 border-l" type="submit">Add</button>
        </div>    
        </form>
    `,

    data(){
        return{
            newAssignment: ''
        }
    },

     methods:{
        add(){
            this.$emit('sad', this.newAssignment);
            this.newAssignment = '';
        }
    }
}
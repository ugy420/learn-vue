import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default{
    components: { AssignmentList, AssignmentCreate },

    template:
    `
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Complete"></assignment-list>

        <assignment-create @sad="add"></assignment-create>
    </section>
    `,
    
    data() {
        return {
            assignments: [],
            newAssignment: '',
        }
    },
    computed: { 
        filters(){
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
        }
    },

    created(){
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },

    methods:{
        add(name){
            this.assignments.push({
                name: name,
                completed: false,
            })
        }
    }
}
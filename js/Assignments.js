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
            assignments: [
                { name: 'Finish project', complete: false, tag: 'math'},
                { name: 'Read chapter 4', complete: false, tag: 'science'},
                { name: 'Turn in homework', complete: false, tag: 'math'},
            ],
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

    methods:{
        add(name){
            this.assignments.push({
                name: name,
                completed: false,
            })
        }
    }
}
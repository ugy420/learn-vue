import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template:
        `
    <section class="flex gap-8">
        <assignment-list :assignments="filters.inProgress" title="In Progress">
            <assignment-create @sad="add"></assignment-create>
        </assignment-list>
        <assignment-list v-if="showCompleted" :assignments="filters.completed" title="Complete" can-toggle @toggle='showCompleted = !showCompleted'></assignment-list>
    </section>
    `,

    data() {
        return {
            assignments: [],
            newAssignment: '',
            showCompleted: true,
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
            })
        }
    }
}
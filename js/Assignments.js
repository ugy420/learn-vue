import AssignmentList from "./AssignmentList.js";

export default{
    components: { AssignmentList },

    template:
    `
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Complete"></assignment-list>
    </section>
    `,
    
    data() {
                return {
                    assignments: [
                        { name: 'Finish project', complete: false },
                        { name: 'Read chapter 4', complete: false },
                        { name: 'Turn in homework', complete: false },
                    ]
                }
            },
            computed: { 
                filters(){
                    return {
                        inProgress: this.assignments.filter(a => !a.complete),
                        completed: this.assignments.filter(a => a.complete)
                    }
                }
            }
}
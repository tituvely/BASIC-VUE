<template>
    <div>
        <h1>title</h1>
        <p>{{name}}</p>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'TITU CODER',
        }
    },
    methods: {
        updateName() {
            this.name = 'TITU CODER UPDATED';
        }
    }
}
</script>

<style scoped>

</style>
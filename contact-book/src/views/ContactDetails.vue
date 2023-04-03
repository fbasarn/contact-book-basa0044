<template>
    <router-link :to="{ name: 'Contacts'}"><button><i>Arrow</i> Contacts</button></router-link>
    <button>Edit</button>
    <div>
        <h2>Name</h2>
        <br>
        <div>email</div>
        <div>Phone</div>
        <div>Address</div>
    </div> 
</template>

<script>
export default {
   props: ['id'],
   data(){
    return {
        
    }
   }
}
</script>

<style scoped>

</style>
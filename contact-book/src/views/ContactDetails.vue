<template>
    <div>
        <h2>Name</h2>
        <br>
        <div>email</div>
        <div>Phone</div>
        <div>Address</div>
        <p>Contact id is: {{ id }} </p>
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

<style>

</style>
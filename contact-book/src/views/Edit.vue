<template>
    <div>
        <router-link :to="{ name: 'Contacts'}"><button><i>Arrow</i> Contacts</button></router-link>
        <h1>Edit Contact</h1>
        <form @submit.prevent>
                <input 
                type="text" 
                id="fname" 
                name="fname" 
                placeholder="First Name"
                v-model="fname">
                <br>
                <input 
                type="text" 
                id="lname" 
                name="lname" 
                placeholder="Last Name"
                v-model="lname"
                >
                <br>
                <input 
                type="text" 
                id="email" 
                name="email" 
                placeholder="email"
                v-model="email"
                >
                <br>
                <input 
                type="text" 
                id="phone" 
                name="phone" 
                placeholder="Phone"
                v-model="phone"
                >
                <br>
                <button type="submit">Update Contact</button>
            </form>
            <button>Delete Contact</button>
    </div>
</template>

<script>
export default{
    data: function(){
    return {
        contacts: [],
        "fname": "",
        "lname": "",
        "email": "",
        "phone": "",
        }
   },
   }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <router-link :to="{ name: 'Contacts' }"><i>Arrow Contacts</i></router-link>
        <h1>New Contact</h1>
        <div>
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
                <button type="submit">Add Contact</button>
            </form>
        </div>
    </div>
</template>

<script>
export default{
    data: function(){
    return {
        fname: "",
        lname: "",
        email: "",
        phone: "",
    }
   }
}
</script>

<style lang="scss" scoped>

</style>
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
                <router-link :to="{ name: 'ContactDetails', params: { id: parseInt(this.$route.params.id) }}">
                <button type="submit" @click="editContact">Update Contact</button>
                </router-link>
            </form>
            <router-link :to="{ name: 'Contacts'}">
            <button @click="deleteContact">Delete Contact</button>
            </router-link>
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
   created: function(){
    this.contacts = JSON.parse(localStorage.getItem("contacts"))
   },
   methods:{
   editContact(){
   const contact = this.contacts.find(
        (contact) => contact.id === parseInt(this.$route.params.id)
        )
        contact.name = this.fname
        contact.lastname = this.lname
        contact.email = this.email
        contact.phone = this.phone
        localStorage.setItem("contacts", JSON.stringify(this.contacts) )
   },
   deleteContact(){
    this.contacts.find(
        (contact) => contact.id === parseInt(this.$route.params.id)
        )
    this.contacts.splice(parseInt(this.$route.params.id), 1)
    const relist = this.contacts.map( (contact, id) => ({...contact, id}) )
    localStorage.setItem("contacts", JSON.stringify(relist) )
    console.log(relist)
   }
   },
   }
</script>

<style lang="scss" scoped>

</style>
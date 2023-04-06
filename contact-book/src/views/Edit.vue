<template>
    <div>
        <div class="header">
            <router-link :to="{ name: 'ContactDetails', params: { id: this.$route.params.id }}"><button><i class="fa-solid fa-arrow-left"></i>  Go Back</button></router-link>
            <h1>Edit Contact</h1>
        </div>
        <form @submit.prevent>
                <input 
                type="text" 
                id="fname" 
                name="fname" 
                v-model="fname"
                :placeholder="contact.name"
                >
                <br>
                <input 
                type="text" 
                id="lname" 
                name="lname" 
                :placeholder="contact.lastname"
                v-model="lname"
                >
                <br>
                <input 
                type="text" 
                id="email" 
                name="email" 
                :placeholder="contact.email"
                v-model="email"
                >
                <br>
                <input 
                type="text" 
                id="phone" 
                name="phone" 
                :placeholder="contact.phone"
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
   computed:{
   contact(){
    const contact = this.contacts.find(
        (contact) => contact.id === parseInt(this.$route.params.id)
        )
        return contact
    }
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
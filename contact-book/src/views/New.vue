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
                <button @click="newContact" type="submit">Add Contact</button>
            </form>
        </div>
    </div>
</template>

<script>

import { isProxy, toRaw } from 'vue';


export default{
    data: function(){
    return {
        contacts: [],
        fname: "",
        lname: "",
        email: "",
        phone: "",
        }
   },
   methods: {
    newContact: function(){
    const id = this.contacts.length
    this.contacts = [...this.contacts, {id:id ,name: this.fname, lastname: this.lname, email:this.email, phone:this.phone}]
    localStorage.setItem("contacts", JSON.stringify(this.contacts) )
   },
   },
   created() {
    const contacts = JSON.parse(localStorage.getItem("contacts"))
    const array = contacts
    this.contacts = array
    console.log(array)
   }
}
</script>

<style lang="scss" scoped>

</style>
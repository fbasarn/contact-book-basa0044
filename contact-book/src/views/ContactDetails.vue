<template>
    <router-link :to="{ name: 'Contacts'}"><button><i>Arrow</i> Contacts</button></router-link>
    <router-link :to="{name: 'Edit'}"><button>Edit</button></router-link>
    <div>
        <h2>{{ contact.name }} {{ contact.lastname }}</h2>
        <div>{{contact.email}}</div><br>
        <div>{{contact.phone}}</div><br>
        <div>{{ contact.street }} {{ contact.city }}</div>
        <div>{{ contact.province }} {{ contact.postal }}</div>
    </div> 
</template>

<script>

export default {
   props: ['id'],
   data(){
    return {
        contacts: [],
        thisContact: [],
    }
   },
   computed: {
    routeId(){
        return parseInt(this.$route.params.id)
    },
    contact() {
        console.log(this.contacts)
        const contact = this.contacts.find(
        (contact) => contact.id === this.routeId
        )
        this.thisContact = contact
        console.log(contact)
        console.log(this.thisContact)
        return contact
    }
   },
   created: function(){
    const contacts = JSON.parse(localStorage.getItem("contacts"))
    this.contacts = contacts
   }
}
</script>

<style scoped>

</style>
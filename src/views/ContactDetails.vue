<template>
    <div class="contactDetailsContainer">
        <div class="contactDetailsHeader mb-3">
            <router-link :to="{ name: 'Contacts'}">
                <button class="btn btn-light"><i class="fa-solid fa-arrow-left"></i>  Contacts</button>
            </router-link>
            <router-link :to="{name: 'Edit'}"><button class="btn btn-light">Edit</button></router-link>
        </div>
        <ul class="contactDetails list-group">
            <li class="list-group-item contact-name">{{ contact.name }} {{ contact.lastname }}</li>
            <li class="list-group-item">{{contact.email}}</li>
            <li class="list-group-item">{{contact.phone}}</li>
            <li class="list-group-item">{{ contact.street }} {{ contact.city }} <br> 
            {{ contact.province }} {{ contact.postal }}</li>
        </ul> 
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
        const contact = this.contacts.find(
        (contact) => contact.id === this.routeId
        )
        this.thisContact = contact
        return contact
    }
   },
   created: function(){
    this.contacts = JSON.parse(localStorage.getItem("contacts"))
   }
}
</script>

<style scoped>
.contactDetailsContainer{
    width: 60vw;
    max-width: 400px;
}
.contactDetailsHeader{
    display: flex;
    justify-content: space-between;
}

.contact-name{
    font-size: 2rem;
}
</style>
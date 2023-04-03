<template>
    <router-link :to="{ name: 'Contacts'}"><button><i>Arrow</i> Contacts</button></router-link>
    <button>Edit</button>
    <div>
        <h2>{{ contact.name }} {{ contact.lastname }}</h2>
        <div>{{contact.email}}</div><br>
        <div>{{contact.phone}}</div><br>
        <div>{{ contact.street }} {{ contact.city }}</div>
        <div>{{ contact.province }} {{ contact.postal }}</div>
    </div> 
</template>

<script>
import dataSet from "../data/data.json"

export default {
   props: ['id'],
   data(){
    return {
    }
   },
   computed: {
    routeId(){
        return parseInt(this.$route.params.id)
    },
    contact() {
        return dataSet.contacts.find(
        (contact) => contact.id === this.routeId
        )
    }
   }
}
</script>

<style scoped>

</style>
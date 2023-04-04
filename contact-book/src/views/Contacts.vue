<template>
<router-link :to="{ name: 'New'}"><button><i>Plus Icon</i> Add New</button></router-link>
<h1>Contact Book</h1>
<input type="text" placeholder="Search" v-model="search"/>
  <ul class="contact--list--container" :if="!! contacts">
   <li v-for="contact in sortedContacts" :key='contact.id' class="contact--list">
           <router-link :to="{ name: 'ContactDetails', params: { id: contact.id }}">
           <span ref="name">
             {{ contact.name }}
             {{ contact.lastname }}
           </span>  
        </router-link>                  
   </li>
</ul>
</template>

<script>
import data from "../data/data.json"


export default ({
name: 'Contact List',
data() {
return{
     search: '',
     contacts: [ ],
 }

},
mounted() {
  const contactslist = JSON.parse(localStorage.getItem("contacts"))
  const array = contactslist
  console.log(array)
  if (contactslist){  
         const sorted = array.sort( (a, b) => {
         if (a.lastname < b.lastname){ return -1 }
         if (a.lastname > b.lastname){ return 1 }
         else{return 0}
     } )
  this.contacts = sorted
} else{
  return this.contacts
}
},
computed: {
 sortedContacts(){
  const filter = this.contacts.filter( contact => {
    return (contact.name + " " + contact.lastname).toLowerCase().includes(this.search)
})
return filter

 }
},
created: function(){ 

}
})
</script>

<style scoped>
.contact--list{
  list-style-type: none;
  text-align: left;
}

.contact--list--container{
  padding: 0;
}
</style>
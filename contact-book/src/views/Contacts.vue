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
import addContact from "../views/New.vue"


export default ({
name: 'Contact List',
data() {
return{
     search: '',
     contacts: [ 
      {   
           "id": 0,
           "name": "Foley",
           "lastname": "Anthony",
           "email": "foleyanthony@artiq.com",
           "phone": "(834) 500-2924",
           "street": "524 Knight Court",
           "city": "Sandborn",
           "province": "South Carolina",
           "postal": 31200
   
        },
        {  
            "id": 1,
            "name": "Coolen",
            "lastname": "Smith",
            "email": "csm@artiq.com",
            "phone": "(834) 500-2924",
            "street": "524 Knight Court",
            "city": "Sandborn",
            "province": "South Carolina",
            "postal": 31200
        },
        {   
            "id": 2,
            "name": "Melike",
            "lastname": "Guzelcik",
            "email": "foleyanthony@artiq.com",
            "phone": "(834) 500-2924",
            "street": "524 Knight Court",
            "city": "Sandborn",
            "province": "South Carolina",
            "postal": 31200
        },
        {  
            "id": 3,
            "name": "Nesibe",
            "lastname": "Eren",
            "email": "foleyanthony@artiq.com",
            "phone": "(834) 500-2924",
            "street": "524 Knight Court",
            "city": "Sandborn",
            "province": "South Carolina",
            "postal": 31200
        },
        {  
            "id": 4,
            "name": "Derya",
            "lastname": "Caman",
            "email": "foleyanthony@artiq.com",
            "phone": "(834) 500-2924",
            "street": "524 Knight Court",
            "city": "Sandborn",
            "province": "South Carolina",
            "postal": 31200
        }
      ]
 }

},
mounted() {
  const contactslist = JSON.parse(localStorage.getItem("contacts"))
  console.log(contactslist)
  if (contactslist){  
         const sorted = contactslist.sort( (a, b) => {
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
},
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
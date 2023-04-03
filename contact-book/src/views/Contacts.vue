<template>
<router-link :to="{ name: 'New'}"><button><i>Plus Icon</i> Add New</button></router-link>
<h1>Contact Book</h1>
<input type="text" placeholder="Search" v-model="search"/>
  <ul class="contact--list--container">
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
export default ({
name: 'Contact List',
data() {
return{
     search: '',
     contacts: [
     {   
        id: 0,
        name: 'Foley',
        lastname: 'Anthony',
        email: 'foleyanthony@artiq.com',
        phone: '(834) 500-2924',
        street: '524 Knight Court',
        city: 'Sandborn',
        province: 'South Carolina',
        postal: '31200'

     },
     {  
        id: 1, 
        name: 'Coolen',
        lastname: 'Avery',
        email: 'foleyanthony@artiq.com',
        phone: '(834) 500-2924',
        street: '524 Knight Court',
        city: 'Sandborn',
        province: 'South Carolina',
        postal: '31200'
     },
     {   
        id: 2,
        name: 'Melike',
        lastname: 'Guzelcik',
        email: 'foleyanthony@artiq.com',
        phone: '(834) 500-2924',
        street: '524 Knight Court',
        city: 'Sandborn',
        province: 'South Carolina',
        postal: '31200'
     },
     {  
        id: 3, 
        name: 'Ashley',
        lastname: 'Branson',
         email: 'foleyanthony@artiq.com',
         phone: '(834) 500-2924',
         street: '524 Knight Court',
         city: 'Sandborn',
         province: 'South Carolina',
         postal: '31200'
     },
     {  
        id: 4, 
        name: 'Hailey',
        lastname: 'Sunny',
        email: 'foleyanthony@artiq.com',
        phone: '(834) 500-2924',
        street: '524 Knight Court',
        city: 'Sandborn',
        province: 'South Carolina',
        postal: '31200'
     },
     ]
 }

},
methods: {
},
computed: {
 sortedContacts(){
    const contacts = this.contacts
    const sorted = contacts.sort( (a, b) => {
         if (a.lastname < b.lastname){ return -1 }
         if (a.lastname > b.lastname){ return 1 }
         else{return 0}
     } )
    const filter = sorted.filter( contact => {
    return (contact.name + " " + contact.lastname).toLowerCase().includes(this.search)
})
    return filter
 }
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
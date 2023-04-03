<template>
  <input type="text" placeholder="Search" v-model="search"/>
  <p> searching: {{ search }}</p>
  <ul class="contact--list--container">
   <li v-for="contact in sortedContacts" :key='contact.id' class="contact--list">
           <span ref="name" @click="handleClick">
             {{ contact.name }}
             {{ contact.lastname }}
           </span>                    
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
         name: 'Foley',
         lastname: 'Anthony',
         email: 'foleyanthony@artiq.com',
         phone: '(834) 500-2924',
         street: '524 Knight Court',
         city: 'Sandborn',
         province: 'South Carolina',
         postal: '31200'

     },
     {   name: 'Coolen',
         lastname: 'Avery',
         email: 'foleyanthony@artiq.com',
         phone: '(834) 500-2924',
         street: '524 Knight Court',
         city: 'Sandborn',
         province: 'South Carolina',
         postal: '31200'
     },
     {   name: 'Ashley',
         lastname: 'Branson',
         email: 'foleyanthony@artiq.com',
         phone: '(834) 500-2924',
         street: '524 Knight Court',
         city: 'Sandborn',
         province: 'South Carolina',
         postal: '31200'
     },
     {   name: 'Hailey',
         lastname: 'Sunny',
         email: 'foleyanthony@artiq.com',
         phone: '(834) 500-2924',
         street: '524 Knight Court',
         city: 'Sandborn',
         province: 'South Carolina',
         postal: '31200'
     },
     {   name: 'Melike',
         lastname: 'Guzelcik',
         email: 'foleyanthony@artiq.com',
         phone: '(834) 500-2924',
         street: '524 Knight Court',
         city: 'Sandborn',
         province: 'South Carolina',
         postal: '31200'
     }
     ]
 }

},
methods: {
 handleClick(){
     console.log(this.$data)
 },
},
computed: {
 sortedContacts(){
     return this.contacts.sort( (a, b) => {
         if (a.lastname < b.lastname){ return -1 }
         if (a.lastname > b.lastname){ return 1 }
         else{return 0}
     } )
 }
}
})
</script>


<style>
.contact--list{
  list-style-type: none;
  text-align: left;
}

.contact--list--container{
  padding: 0;
}
</style>
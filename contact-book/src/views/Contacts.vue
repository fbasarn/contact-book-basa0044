<template>
  <div class="contactContainer">
<div class="contactHeader">
  <router-link :to="{ name: 'New'}"><button><i class="fa-solid fa-plus"></i> Add New</button></router-link>
  <h1>Contact Book</h1>
</div>
<div class="search">
<input type="text" placeholder="Search" v-model="search" class="form-control mb-3"/>
</div>
  <ul class="contact--list--container list-group" :if="!! contacts">
   <li v-for="(contact) in sortedContacts" :key='contact.id' class="contact--list list-group-item">
           <router-link :to="{ name: 'ContactDetails', params: { id: contact.id }}">
           <span ref="name">
             {{ contact.name }}
             {{ contact.lastname }}
           </span>  
        </router-link>                  
   </li>
</ul>
</div>
</template>

<script>


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
           "postal": "31200"
   
        },
        {  
            "id": 1,
            "name": "Coolen",
            "lastname": "Smith",
            "email": "csm@artiq.com",
            "phone": "(604) 566-9001",
            "street": "E 24th Ave",
            "city": "Vancouver",
            "province": "British Columbia",
            "postal": "V5V 3P3"

        },
        {   
            "id": 2,
            "name": "Kailey",
            "lastname": "Nitzsche",
            "email": "nietk@artiq.com",
            "phone": "(905) 303-3817",
            "street": "9320 Bathurst St",
            "city": "Vaughan",
            "province": "Ontario",
            "postal": "L6A 4N9"
        },
        {  
            "id": 3,
            "name": "Cristobal",
            "lastname": "Schowalter",
            "email": "cristobals@artiq.com",
            "phone": "(834) 500-2924",
            "street": "10719 124 St NW",
            "city": "Edmonton",
            "province": "Alberta",
            "postal": "T5M 0H1"
        },
        {  
            "id": 4,
            "name": "Destiney",
            "lastname": "Herman",
            "email": "destineyh@artiq.com",
            "phone": "(519) 671-6337",
            "street": "420 York St",
            "city": "London",
            "province": "Ontario",
            "postal": "N6B1R1"
        },
        {  
            "id": 5,
            "name": "Catherine",
            "lastname": "Bayer",
            "email": "cathbayer@artiq.com",
            "phone": "(514) 281-4422",
            "street": "585 Rue Sainte-Catherine Ouest",
            "city": "Montréal",
            "province": "Quebec",
            "postal": "H3B 3Y5"
        },
        {  
            "id": 6,
            "name": "Dale",
            "lastname": "Ratke",
            "email": "daleratke@artiq.com",
            "phone": "(416) 924-9221",
            "street": "955 Bay St",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M5S 2A2"
        },
        {  
            "id": 7,
            "name": "Francis",
            "lastname": "Okuneva",
            "email": "francisok@artiq.com",
            "phone": "(416) 967-1111",
            "street": "150 Great Lakes Dr #136",
            "city": "Brampton",
            "province": "Ontario",
            "postal": "L6R 2K7"
        },
        {  
            "id": 8,
            "name": "Jackie",
            "lastname": "Jacobson",
            "email": "jackiej@artiq.com",
            "phone": "(604) 967-8950",
            "street": "Blackcomb Way",
            "city": "Whistler",
            "province": "British Columbia",
            "postal": "V0N 1B4"
        },
        {  
            "id": 9,
            "name": "Marisa",
            "lastname": "Schmeler",
            "email": "marisaschmeler@artiq.com",
            "phone": "(403) 452-5400",
            "street": "Suite 515-515 70 Ave SW",
            "city": "Calgary",
            "province": "Alberta",
            "postal": "T2V 0P5"
        },
        {  
            "id": 10,
            "name": "Gisselle",
            "lastname": "Walker",
            "email": "gisellew@artiq.com",
            "phone": "(902) 424-5280",
            "street": "1723 Hollis St",
            "city": "Halifax",
            "province": "Nova Scotia",
            "postal": "B3J 1V9"
        },
        {  
            "id": 11,
            "name": "Camila",
            "lastname": "Gulgowski",
            "email": "camilag@artiq.com",
            "phone": "(905) 669-3886",
            "street": "1 Bass Pro Mills Dr K1",
            "city": "Concord",
            "province": "Ontario",
            "postal": "L4K 5W4"
        },
        {  
            "id": 12,
            "name": "Elinor",
            "lastname": "Barton",
            "email": "elinorbarton@artiq.com",
            "phone": "(604) 444-4410",
            "street": "3292 Production Way",
            "city": "Burnaby",
            "province": "British Columbia",
            "postal": "V5A 4R4"
        },
        {  
            "id": 13,
            "name": "Shad",
            "lastname": "Hirthe",
            "email": "shadh@artiq.com",
            "phone": "(416) 977-8451",
            "street": "385 Yonge St",
            "city": "Toronto",
            "province": "Ontario",
            "postal": "M5B 1S1"
        },
        {  
            "id": 14,
            "name": "Randi",
            "lastname": "O'Keefe",
            "email": "randiokeefe.com",
            "phone": "(306) 955-8667",
            "street": "905 51 St",
            "city": "Saskatoon",
            "province": "Saskatchewan",
            "postal": "S7K 7E4"
        },
      ]
 }

},
mounted() {

},
computed: {
 sortedContacts(){
  const sorted = this.contacts.sort( (a, b) => {
         if (a.lastname < b.lastname){ return -1 }
         if (a.lastname > b.lastname){ return 1 }
         else{return 0}
     } )
  const filter = sorted.filter( contact => {
    return (contact.name + " " + contact.lastname).toLowerCase().includes(this.search)
})
return filter

 }
},
created: function(){ 
  const contactslist = JSON.parse(localStorage.getItem("contacts")) || this.contacts
  localStorage.setItem("contacts", JSON.stringify(contactslist))
  this.contacts = contactslist
},
})
</script>

<style scoped>
.contactContainer{
  height: calc(100vh - 64px);
}
.contact--list{
  list-style-type: none;
  text-align: left;
}

.contact--list > a{
  text-decoration: none;
  color: black;
}

.contact--list--container{
  padding: 0;
  width: 60vw;
  max-width: 800px;
}

.search{
  position:relative;
}
</style>
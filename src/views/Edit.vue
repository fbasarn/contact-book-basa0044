<template>
    <div class="editContainer">
        <div class="editHeader">
            <router-link :to="{ name: 'ContactDetails', params: { id: this.$route.params.id }}"><button class="btn btn-light"><i class="fa-solid fa-arrow-left"></i></button></router-link>
            <h1>Edit Contact</h1>
        </div>
        <form @submit.prevent>
            <div class="mb-3">
                    <input 
                    class="form-control" type="text" 
                    id="fname" name="fname" 
                    :placeholder="contact.name"
                    v-model="fname">
                </div>
                <div class="mb-3">
                    <input 
                    class="form-control" type="text" 
                    id="lname" name="lname" 
                    :placeholder="contact.lastname"
                    v-model="lname"
                    >
                </div>
                <div class="mb-3">
                    <input 
                    class="form-control" type="email" 
                    id="email" name="email" 
                    :placeholder="contact.email"
                    v-model="email"
                    >
                </div>
                <div class="mb-3">
                    <input 
                    class="form-control" type="text" 
                    id="phone" name="phone" 
                    :placeholder="contact.phone"
                    v-model="phone"
                    >
                </div>
                <div class="mb-3">
                    <input 
                    class="form-control" type="text" 
                    id="street" name="street" 
                    :placeholder="contact.street"
                    v-model="street"
                    >
                </div>
                <div class="mb-3">
                    <input 
                    class="form-control" type="text" 
                    id="city" name="city" 
                    :placeholder="contact.city"
                    v-model="city"
                    >
                </div>
                <div class="mb-3">
                    <input 
                    class="form-control" type="text" 
                    id="province" name="province" 
                    :placeholder="contact.province"
                    v-model="province"
                    >
                </div>
                <div class="mb-3">
                    <input 
                    class="form-control" type="text" 
                    id="postal" name="postal" 
                    :placeholder="contact.postal"
                    v-model="postal"
                    >
                </div>
                <router-link :to="{ name: 'ContactDetails', params: { id: parseInt(this.$route.params.id) }}">
                <button type="submit" @click="editContact" class="btn btn-light">Update Contact</button>
                </router-link>
            </form>
            <router-link :to="{ name: 'Contacts'}" class="deleteContact">
            <button @click="deleteContact" class="btn btn-delete">Delete Contact</button>
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
        "street": "",
        "city": "",
        "province": "",
        "postal": ""
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
        contact.street = this.street
        contact.city = this.city
        contact.province = this.province
        contact.postal = this.postal
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

<style scoped>
.editContainer{
    width: 90vw;
    max-width: 500px;
}
.editHeader{
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
}

.deleteContact{
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
}
.btn-delete{
    border: 1px solid brown;
    text-decoration: none;
}

.btn-delete:hover{
    background-color: brown;
    color: white;
}
</style>
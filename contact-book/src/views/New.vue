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
                placeholder="Phone Number"
                v-model="phone"
                >
                <br>
                <input 
                type="text" 
                id="street" 
                name="street" 
                placeholder="Street"
                v-model="street"
                >
                <br>
                <input 
                type="text" 
                id="city" 
                name="city" 
                placeholder="City/Town"
                v-model="city"
                >
                <br>
                <input 
                type="text" 
                id="province" 
                name="province" 
                placeholder="State/Province/Region"
                v-model="province"
                >
                <br>
                <input 
                type="text" 
                id="postal" 
                name="postal" 
                placeholder="ZIP/ Postal Code"
                v-model="postal"
                >
                <br>
                <router-link :to="{ name: 'ContactDetails', params: { id: this.contacts.length - 1 }}">
                <button @click="newContact" type="submit">Add Contact</button>
                </router-link>
            </form>
        </div>
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
   methods: {
    newContact: function(){
    const id = this.contacts.length
    this.contacts = [...this.contacts, {id:id ,name: this.fname, lastname: this.lname, email:this.email, 
        phone:this.phone, street:this.street, city:this.city, province:this.province, postal:this.postal }]
    localStorage.setItem("contacts", JSON.stringify(this.contacts) )
   },
   },
   created() {
    const contacts = JSON.parse(localStorage.getItem("contacts"))
    this.contacts = contacts
    console.log(contacts)
   }
}
</script>

<style lang="scss" scoped>

</style>
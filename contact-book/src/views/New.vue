<template>
    <div>
        <router-link :to="{ name: 'Contacts' }"><i>Arrow Contacts</i></router-link>
        <h1>New Contact</h1>
        <div>
            <form>
                <input type="text" id="fname" name="fname" placeholder="First Name"><br>
                <input type="text" id="lname" name="lname" placeholder="Last Name"><br>
                <input type="text" id="email" name="email" placeholder="email"><br>
                <input type="text" id="phone" name="phone" placeholder="Phone"><br>
                <button type="submit">Add Contact</button>
            </form>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>
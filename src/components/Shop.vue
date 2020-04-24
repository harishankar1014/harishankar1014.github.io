<template>
<div>
    <button class="button logout" v-on:click="logout">Logout</button>
    <article class="covers" v-for="shop in shops" :key="shop.name">
      <div>
        <!-- <img style="margin: 10px" :src="item.image" height="291px" width="192px"> -->
        <p >{{ shop.name }}</p>
        <router-link  :to="{name: 'Items', params: { collections: shop.name }}" class="nav-link">View Stock</router-link>
        <hr>
        <button class="button" @click="deleteItem(shop.id)">
          Delete
        </button>
      </div>
    </article>
    <form @submit="addShop(name)">
      <h2>Add a New Shop</h2>
      <input v-model="name" placeholder="Shop Name" class="input" required>
      <!-- <input v-model="image" placeholder="Item Image URL" class="input" required> -->
      <button type="submit" class="button">Add New Shop</button>
    </form>
</div>
</template>
<script>
import firebase from 'firebase'
import { db } from '../main'
export default {
  name: 'Shops',
  data () {
    return {
      shops: [],
      name: '',
      image: '',
      // count:0
    }
  },
  firestore () {
    return {
      shops: db.collection('shops').orderBy('createdAt')
    }
  },
  methods: {
    addShop (name) {
      const createdAt = new Date()
      db.collection('shops').add({ name,createdAt })
      // Clear values
      this.name = ''
      this.image = ''
    },
    deleteShops (id) {
      db.collection('shops').doc(id).delete()
    },
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
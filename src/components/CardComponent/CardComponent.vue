<script>
export default {
  name: 'CardComponent',
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
}
</script>

<template>
  <div class="card">
    <div class="title">
      <h1 class="title__text">
        Invite User
      </h1>
      <svg class="title__svg" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 2C6.92428 2 2 6.92428 2 13C2 19.0757 6.92428 24 13 24C19.0757 24 24 19.0757 24 13C24 6.92428 19.0757 2 13 2ZM0 13C0 5.81972 5.81972 0 13 0C20.1803 0 26 5.81972 26 13C26 20.1803 20.1803 26 13 26C5.81972 26 0 20.1803 0 13ZM8.51956 8.51956C8.91008 8.12904 9.54325 8.12904 9.93377 8.51956L13 11.5858L16.0662 8.51956C16.4568 8.12904 17.0899 8.12904 17.4804 8.51956C17.871 8.91008 17.871 9.54325 17.4804 9.93377L14.4142 13L17.4804 16.0662C17.871 16.4568 17.871 17.0899 17.4804 17.4804C17.0899 17.871 16.4568 17.871 16.0662 17.4804L13 14.4142L9.93377 17.4804C9.54325 17.871 8.91008 17.871 8.51956 17.4804C8.12904 17.0899 8.12904 16.4568 8.51956 16.0662L11.5858 13L8.51956 9.93377C8.12904 9.54325 8.12904 8.91008 8.51956 8.51956Z"/>
      </svg>
    </div>
    <div class="buttons">
      <router-link
        class="button"
        to="/"
        :class="{ active: isActive('/') }"
      >
        <div class="button__container">
          <div
            class="button__number"
            :class="{
              active__text: isActive('/'),
              done: !isActive('/')
            }"
          >
            <template v-if="$route.path === '/'">1</template>
            <template v-else>
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.40039 5.2001L3.80039 7.6001L9.80039 1.6001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </div>
          <p 
            class="button__text"
            :class="{ active__text: isActive('/') }"
          >
            Main Info
          </p>
        </div>
      </router-link>
      <router-link 
        class="button"
        to="/second"
        :class="{ active: isActive('/second') }"
      >
        <div class="button__container">
          <div 
            class="button__number"
            :class="{
              active__text: isActive('/second'),
              done: isActive('/third')
            }"
          >
            <template v-if="$route.path === '/third'">
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.40039 5.2001L3.80039 7.6001L9.80039 1.6001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
            <template v-else>2</template>
          </div>
          <p 
            class="button__text"
            :class="{ active__text: isActive('/second') }"
          >
            Available Locations
          </p>
        </div>
      </router-link>
      <router-link 
        class="button" 
        to="/third"
        :class="{ active: isActive('/third') }"
      >
        <div class="button__container">
          <div 
            class="button__number"
            :class="{ active__text: isActive('/third') }"
          >
            3
          </div>
          <p 
            class="button__text"
            :class="{ active__text: isActive('/third') }"
          >
            Roles
          </p>
        </div>
      </router-link>
    </div>
    <div class="card__line"></div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@import './CardComponent.scss';
</style>

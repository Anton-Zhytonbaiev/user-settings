<script>
export default {
  name: 'FirstPage',
  data() {
    return {
      isDisabled: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        company: '',
        activeAll: false,
      }
    };
  },
  watch: {
    form: {
      handler() {
        localStorage.form = JSON.stringify(this.form);
      },
      deep: true,
    }
  },
  methods: {
    submitForm() {
      if (this.form.firstName && this.form.email) {
        this.$router.push('/second');
      } else {
        alert('Please fill out all fields.');
      }
    }
  },
  mounted() {
    if (localStorage.form) {
      this.form = JSON.parse(localStorage.form);
    }
    if (localStorage.isDisabled) {
      this.isDisabled = JSON.parse(localStorage.isDisabled);
    }
  },
}
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="form__container">
        <div class="form__group">
          <label
            class="label__text"
            for="firstName"
          >
            First Name
          </label>
          <input
            class="field"
            type="text"
            v-model.lazy="form.firstName"
            id="firstName"
            :disabled="isDisabled"
          >
        </div>
        <div class="form__group">
          <label 
            class="label__text"
            for="lastName"
          >
            Last Name
          </label>
          <input
            class="field"
            type="text"
            v-model.lazy="form.lastName"
            id="lastName"
            :disabled="isDisabled"
          >
        </div>
        <div class="form__group">
          <label
            class="label__text"
            for="email"
          >
            Email Address
          </label>
          <input 
            class="field"
            type="email"
            v-model.lazy="form.email"
            id="email"
            :disabled="isDisabled"
          >
        </div>
        <div class="form__group">
          <label 
            class="label__text"
            for="phone"
          >
            Phone Number
          </label>
          <input 
            class="field"
            type="tel"
            v-model.lazy="form.phone"
            id="phone"
            :disabled="isDisabled"
          >
        </div>
        <div class="form__group">
          <label 
            class="label__text" 
            for="position"
          >
            Position
          </label>
          <input
            class="field"
            type="text"
            v-model.lazy="form.position"
            id="position"
            :disabled="isDisabled"
          >
        </div>
        <div class="form__group">
          <label
            class="label__text"
            for="company"
          >
            Available in company
          </label>
          <select 
            class="field" 
            v-model.lazy="form.company"
            id="company" 
            :disabled="isDisabled"
          >
            <option value="Precoro">Precoro</option>
            <option value="Google">Google</option>
            <option value="Apple">Apple</option>
          </select>
        </div>
      </div>
      <div class="form__line"></div>
      <div class="form__ending">
        <div class="form__ending-left">
          <label class="switch">
            <input 
              type="checkbox" 
              v-model.lazy="form.activeAll"
              :disabled="isDisabled"
            >
            <span class="slider round"></span>
          </label>
          <p class="form__ending-text">
            Active in all companies
          </p>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.75C5.44321 1.75 1.75 5.44321 1.75 10C1.75 14.5568 5.44321 18.25 10 18.25C14.5568 18.25 18.25 14.5568 18.25 10C18.25 5.44321 14.5568 1.75 10 1.75ZM0.25 10C0.25 4.61479 4.61479 0.25 10 0.25C15.3852 0.25 19.75 4.61479 19.75 10C19.75 15.3852 15.3852 19.75 10 19.75C4.61479 19.75 0.25 15.3852 0.25 10ZM10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V7C10.75 7.41421 10.4142 7.75 10 7.75C9.58579 7.75 9.25 7.41421 9.25 7V6C9.25 5.58579 9.58579 5.25 10 5.25ZM10 9.25C10.4142 9.25 10.75 9.58579 10.75 10V15C10.75 15.4142 10.4142 15.75 10 15.75C9.58579 15.75 9.25 15.4142 9.25 15V10C9.25 9.58579 9.58579 9.25 10 9.25Z" fill="#8e91a8"/>
          </svg>
        </div>
        <button  
          class="form__submit" 
          type="submit"
        >
          Next Step
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import './FirstPage.scss';
</style>








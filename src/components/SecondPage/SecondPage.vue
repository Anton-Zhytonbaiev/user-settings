<script>
export default {
  name: 'SecondPage',
  data() {
    return {
      isDisabled: false,
      form2: {
        mainLocation: '',
        allLocations: false,
        locations: [
          {id: 1, name: 'Berlin', selected: false},
          {id: 2, name: 'Venice Office', selected: false},
          {id: 3, name: 'USA Office', selected: false},
          {id: 4, name: 'Canada', selected: false},
          {id: 5, name: 'Poland Office', selected: false},
          {id: 6, name: 'Mexico', selected: false},
          {id: 7, name: 'Ukraine', selected: false},
        ]
      }
    };
  },
  watch: {
    form2: {
      handler() {
        localStorage.form2 = JSON.stringify(this.form2);
      },
      deep: true,
    }
  },
  methods: {
    submitForm() {
      if (this.form2.mainLocation) {
        this.$router.push('/third');
      } else {
        alert('Please fill out all fields.');
      }
    },
    toggleAllLocations() {
      const allSelected = this.form2.allLocations;
      this.form2.locations.forEach(location => {
        location.selected = allSelected;
      });
    },
  },
  mounted() {
    if (localStorage.form2) {
      this.form2 = JSON.parse(localStorage.form2);
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
            for="mainLocation"
          >
            Main Location <span class="required"></span>
          </label>
          <select
            class="field"
            v-model.lazy="form2.mainLocation"
            id="mainLocation"
            required :disabled="isDisabled"
          >
            <option value="precoro-main">Main Precoro US</option>
            <option value="precoro-pl">Precoro Poland</option>
            <option value="precoro-ua">Precoro Ukraine</option>
          </select>
        </div>
        <div class="form__group-checkbox">
          <input
            type="checkbox"
            class="checkbox"
            v-model.lazy="form2.allLocations"
            id="allLocations"
            @change="toggleAllLocations"
            :disabled="isDisabled"
          >
          <label 
            class="checkbox__text" 
            for="allLocations"
          >
            Select All Locations
          </label>
        </div>
        <p class="form__text">
          Available Locations
        </p>
        <div class="container">
          <div style="margin-right: 56px;">
            <div v-for="(item) in form2.locations.slice(0, 4)" :key="item.id">
              <div class="form__group-checkbox">
                <input
                  type="checkbox"
                  class="checkbox"
                  v-model.lazy="item.selected"
                  :id="`${item.name}`"
                  :disabled="isDisabled"
                >
                <label class="checkbox__text" :for="`${item.name}`">
                  {{ item.name }}
                </label>
              </div>
            </div>
          </div>
          <div>
            <div v-for="(item) in form2.locations.slice(4)" :key="item.id">
              <div class="form__group-checkbox">
                <input 
                  type="checkbox"
                  class="checkbox"
                  v-model.lazy="item.selected"
                  :id="`${item.name}`"
                  :disabled="isDisabled"
                >
                <label class="checkbox__text" :for="`${item.name}`">
                  {{ item.name }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form__line"></div>
      <div class="form__ending">
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
@import './SecondPage.scss';
</style> 
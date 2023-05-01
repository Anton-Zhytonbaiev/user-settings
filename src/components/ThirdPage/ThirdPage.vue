<script>
export default {
  name: 'ThirdPage',
  data() {
    return {
      isDisabled: false,
      form3: {
        accessAll: false,
        viewAll: false,
        createAll: false,
        approveAll: false,
        payAll: false,
        managementAll: false,
        access: [
          {id: 1, name: 'WarehouseReq', view: false, create: false, approve: false, pay: false},
          {id: 2, name: 'PurchaseReq', view: false, create: false, approve: false, pay: false},
          {id: 3, name: 'proposalsReq', view: false, create: false, approve: false, pay: false},
          {id: 4, name: 'Purchase orders', view: false, create: false, approve: false, pay: false},
          {id: 5, name: 'Receipts', view: false, create: false, approve: false, pay: false},
          {id: 6, name: 'Invoices', view: false, create: false, approve: false, pay: false},
          {id: 7, name: 'Expenses', view: false, create: false, approve: false, pay: false},
        ],
        management: {config: false, suppliers: false, budgets: false, warehouseManager: false, reports: false},
      }
    };
  },
  watch: {
    form3: {
      handler() {
        localStorage.form3 = JSON.stringify(this.form3);
      },
      deep: true
    },
    isDisabled: {
      handler() {
        localStorage.isDisabled = JSON.stringify(this.isDisabled);
      },
    },
  },
  methods: {
    submitForm() {
      const information = {...JSON.parse(localStorage.form), ...JSON.parse(localStorage.form2), ...this.form3}
      console.log(information);
    },
    toggleAll(type) {
      const allSelected = this.form3[`${type}All`];
      this.form3.access.forEach(item => {
        item[type] = allSelected;
      });
    },
    toggleAllManag() {
      const allSelected = this.form3.managementAll;
      this.form3.management.config = allSelected;
      this.form3.management.suppliers = allSelected;
      this.form3.management.budgets = allSelected;
      this.form3.management.warehouseManager = allSelected;
      this.form3.management.reports = allSelected;
    },
    toggleAllAccess() {
      this.form3.managementAll = this.form3.accessAll;
      this.form3.viewAll = this.form3.accessAll;
      this.form3.createAll = this.form3.accessAll;
      this.form3.approveAll = this.form3.accessAll;
      this.form3.payAll = this.form3.accessAll;
      this.toggleAllManag();
      this.toggleAll('view');
      this.toggleAll('create');
      this.toggleAll('approve');
      this.toggleAll('pay');
    },
    toggleDisabled() {
      this.isDisabled = true;
    },
  },
  mounted() {
    if (localStorage.form3) {
      this.form3 = JSON.parse(localStorage.form3);
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
        <div class="column">
          <p class="column__text-main">Access to:</p>
          <p class="column__text">All bellow</p>
          <p class="column__text">Warehouse requests</p>
          <p class="column__text">Purchase requests</p>
          <p class="column__text">Request for proposals</p>
          <p class="column__text">Purchase orders</p>
          <p class="column__text">Receipts</p>
          <p class="column__text">Invoices</p>
          <p class="column__text">Expenses</p>
        </div>

        <div class="column">
          <div class="line__container">
            <p class="line__sector">View only</p>
            <p class="line__sector">Create</p>
            <p class="line__sector">Approve</p>
            <p class="line__sector">Pay</p>
          </div>
          <div class="line__container">
            <input
              type="checkbox"
              class="checkbox"
              v-model.lazy="form3.viewAll"
              @change="() => toggleAll('view')"
              :disabled="isDisabled"
            >
            <input
              type="checkbox"
              class="checkbox"
              v-model.lazy="form3.createAll"
              @change="() => toggleAll('create')"
              :disabled="isDisabled"
            >
            <input
              type="checkbox"
              class="checkbox"
              v-model.lazy="form3.approveAll"
              @change="() => toggleAll('approve')"
              :disabled="isDisabled"
            >
            <input
              type="checkbox"
              class="checkbox"
              v-model.lazy="form3.payAll"
              @change="() => toggleAll('pay')"
              :disabled="isDisabled"
            >
          </div>
          <div v-for="(item) in form3.access" :key="item.id">
            <div class="line__container">
              <input
                type="checkbox"
                class="checkbox"
                v-model.lazy="item.view"
                :disabled="isDisabled"
              >
              <input
                type="checkbox"
                class="checkbox"
                v-model.lazy="item.create"
                :disabled="isDisabled"
              >
              <input
                type="checkbox"
                class="checkbox"
                v-model.lazy="item.approve"
                :disabled="isDisabled"
              >
              <input
                type="checkbox"
                class="checkbox"
                v-model.lazy="item.pay"
                :disabled="isDisabled"
              >
            </div>
          </div>
        </div>
        <div class="form__line-vertical"></div>
        <div class="column">
          <div class="line__container line__container-custom">
            <p class="line__sector-custom">
              Management:
            </p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.75C5.44321 1.75 1.75 5.44321 1.75 10C1.75 14.5568 5.44321 18.25 10 18.25C14.5568 18.25 18.25 14.5568 18.25 10C18.25 5.44321 14.5568 1.75 10 1.75ZM0.25 10C0.25 4.61479 4.61479 0.25 10 0.25C15.3852 0.25 19.75 4.61479 19.75 10C19.75 15.3852 15.3852 19.75 10 19.75C4.61479 19.75 0.25 15.3852 0.25 10ZM10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V7C10.75 7.41421 10.4142 7.75 10 7.75C9.58579 7.75 9.25 7.41421 9.25 7V6C9.25 5.58579 9.58579 5.25 10 5.25ZM10 9.25C10.4142 9.25 10.75 9.58579 10.75 10V15C10.75 15.4142 10.4142 15.75 10 15.75C9.58579 15.75 9.25 15.4142 9.25 15V10C9.25 9.58579 9.58579 9.25 10 9.25Z" fill="#8e91a8"/>
            </svg>
          </div>
          <div class="checkbox__container">
            <input
              type="checkbox"
              class="checkbox"
              v-model.lazy="form3.managementAll"
              @change="toggleAllManag"
              id="managementAll"
              :disabled="isDisabled"
            >
            <label 
              class="checkbox__text checkbox__text-main" 
              for="managementAll"
            >
              All bellow
            </label>
          </div>
          <div class="checkbox__container">
            <input 
              type="checkbox" 
              class="checkbox" 
              v-model.lazy="form3.management.config" 
              id="configuration" 
              :disabled="isDisabled"
            >
            <label 
              class="checkbox__text checkbox__text" 
              for="configuration"
            >
              Configuration
            </label>
          </div>
          <div class="checkbox__container">
            <input
              type="checkbox"
              class="checkbox"
              v-model.lazy="form3.management.suppliers"
              id="suppliersAndItems"
              :disabled="isDisabled"
            >
            <label
              class="checkbox__text checkbox__text"
              for="suppliersAndItems"
            >
              Suppliers and items
            </label>
          </div>
          <div class="checkbox__container">
            <input 
              type="checkbox" 
              class="checkbox" 
              v-model.lazy="form3.management.budgets" 
              id="budgets" :disabled="isDisabled"
            >
            <label 
              class="checkbox__text checkbox__text" 
              for="budgets"
            >
              Budgets
            </label>
          </div>
          <div class="checkbox__container">
            <input 
              type="checkbox" 
              class="checkbox" 
              v-model.lazy="form3.management.warehouseManager" 
              id="warehouseManager" 
              :disabled="isDisabled"
            >
            <label 
              class="checkbox__text checkbox__text" 
              for="warehouseManager"
            >
              Warehouse manager
            </label>
          </div>
          <div class="checkbox__container">
            <input 
              type="checkbox" 
              class="checkbox" 
              v-model.lazy="form3.management.reports" 
              id="reports" 
              :disabled="isDisabled"
            >
            <label 
              class="checkbox__text checkbox__text" 
              for="reports"
            >
              Reports
            </label>
          </div>
          <div class="checkbox__container checkbox__container-admin">
            <input 
              type="checkbox" 
              class="checkbox" 
              v-model.lazy="form3.accessAll" 
              @change="toggleAllAccess" 
              id="Admin" 
              :disabled="isDisabled"
            >
            <label 
              class="checkbox__text checkbox__text" 
              for="Admin"
            >
              Admin (Full access)
            </label>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7V11.5M11 14.5V15M3.38254 19H18.6175C20.1387 19 21.103 17.3691 20.3699 16.0362L12.7524 2.18624C11.9926 0.80469 10.0074 0.804688 9.24757 2.18624L1.63011 16.0362C0.897013 17.3691 1.86134 19 3.38254 19Z" stroke="#EA9210" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="information">
        <svg class="information__svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.75C5.44321 1.75 1.75 5.44321 1.75 10C1.75 14.5568 5.44321 18.25 10 18.25C14.5568 18.25 18.25 14.5568 18.25 10C18.25 5.44321 14.5568 1.75 10 1.75ZM0.25 10C0.25 4.61479 4.61479 0.25 10 0.25C15.3852 0.25 19.75 4.61479 19.75 10C19.75 15.3852 15.3852 19.75 10 19.75C4.61479 19.75 0.25 15.3852 0.25 10ZM10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V7C10.75 7.41421 10.4142 7.75 10 7.75C9.58579 7.75 9.25 7.41421 9.25 7V6C9.25 5.58579 9.58579 5.25 10 5.25ZM10 9.25C10.4142 9.25 10.75 9.58579 10.75 10V15C10.75 15.4142 10.4142 15.75 10 15.75C9.58579 15.75 9.25 15.4142 9.25 15V10C9.25 9.58579 9.58579 9.25 10 9.25Z" fill="#8b8fa8"/>
        </svg>
        <p class="information__text">
          The user becomes a <a href="https://precoro.com/" target="_blank" title="Go to the company website">Power user</a> if at least ONE of the following roles is selected: Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.
        </p>
      </div>
      <div class="form__line"></div>
      <div class="form__ending">
        <button 
          class="form__submit form__submit-final" 
          @click="toggleDisabled" 
          type="submit"
        >
          Invite User
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import './ThirdPage.scss';
</style> 
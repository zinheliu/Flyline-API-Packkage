<template>
  <div class="personal-info-form">
    <div class="dashboard-toolbar d-flex justify-content-between align-items-center mb-4">
      <p class="mb-0 dashboard-title-text text-left mr-1 mr-md-0">Company Information</p>
      <b-btn class="custom-btn save-btn ml-auto" @click="updateCompanyInfo">
        <b-spinner small variant="light" class="mr-2" v-if="submitting"></b-spinner>
        <span v-else>Save</span>
      </b-btn>
    </div>
    <div class="table-section">
      <validation-observer ref="formObserver" v-slot="{ handleSubmit }">
        <b-form @submit.stop.prevent="handleSubmit(updateCompanyInfo)">
          <b-table class="shrink-table info-table" :fields="fields" :items="[infoFormData]">
            <template #cell(avatar)="row">
              <div class="avatar-form d-flex flex-column align-items-center justify-content-center">
                <div class="user-avatar-large d-flex justify-content-center align-items-center mr-md-4">
                  <img v-if="infoFormData.avatar" :src="infoFormData.avatar" alt="" class="w-100 h-100"/>
                  <span v-else class="gilroy-b">{{ companyFirstLetter }}</span>
                  <div class="edit-btn">
                    <b-icon icon="pencil-fill" scale="0.7" variant="light" @click="openAvatarPicker"></b-icon>
                  </div>
                </div>
                <input ref="avatarFilePicker" type="file" style="display:none" @change="onAvatarFilePicked"/>
              </div>
            </template>
            <template #cell(companyName)="row">
              <span v-if="!editMode">{{getContent(row.item.companyName)}}</span>
              <b-input v-else v-model="infoFormData.companyName" class="input-field" placeholder="Company Name"></b-input>
              <b-icon icon="pencil-fill" scale="0.7" class="ml-3" v-if="!editMode" @click="toggleEditMode"></b-icon>
            </template>
            <template #cell(companyEmail)="row">
              <span v-if="!editMode">{{getContent(row.item.companyEmail)}}</span>
              <validation-provider name="Email" rules="email" v-slot="validationContext" v-else>
                <b-input v-model="infoFormData.companyEmail" class="input-field" placeholder="Company Email"></b-input>
                <b-form-invalid-feedback :class="[getValidationState(validationContext) ? '' : 'd-block']" v-for="(error, eI) in validationContext.errors" :key="eI">{{ error }}</b-form-invalid-feedback>
              </validation-provider>
              <b-icon icon="pencil-fill" scale="0.7" class="ml-3" v-if="!editMode" @click="toggleEditMode"></b-icon>
            </template>
            <template #cell(companyWebsite)="row">
              <span v-if="!editMode">{{getContent(row.item.companyWebsite)}}</span>
              <validation-provider name="Website" v-slot="validationContext" v-else>
                <b-input v-model="infoFormData.companyWebsite" class="input-field" placeholder="Company Website"></b-input>
                <b-form-invalid-feedback :class="[getValidationState(validationContext) ? '' : 'd-block']" v-for="(error, eI) in validationContext.errors" :key="eI">{{ error }}</b-form-invalid-feedback>
              </validation-provider>
              <b-icon icon="pencil-fill" scale="0.7" class="ml-3" v-if="!editMode" @click="toggleEditMode"></b-icon>
            </template>
          </b-table>
        </b-form>
      </validation-observer>
    </div>
    <!-- <div class="form-part d-flex flex-column flex-md-row">
      <div class="info-form mt-3 mt-md-0">
        <b-row class="mx-0">
          <b-col cols="12" md="6" class="px-0 px-md-2">
            <b-input
              v-model="infoFormData.companyName"
              class="input-field"
              placeholder="Company Name"
            ></b-input>
            <b-input
              v-model="infoFormData.companyWebsite"
              class="input-field mt-3 mb-3 mb-md-0"
              placeholder="Company Website"
            ></b-input>
          </b-col>
          <b-col cols="12" md="6" class="px-0 px-md-2">
            <b-input
              v-model="infoFormData.companyEmail"
              class="input-field"
              placeholder="Company Email"
            ></b-input>
            <b-input
              v-model="infoFormData.productFocus"
              class="input-field mt-3"
              placeholder="Product Focus (Optional)"
            ></b-input>
          </b-col>
        </b-row>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      fields: [
        { key: 'avatar', label: 'Upload Logo' },
        { key: 'companyName', label: 'Company Name' },
        { key: 'companyEmail', label: 'Company Email Address' },
        { key: 'companyWebsite', label: 'Company Website' },
      ],
      infoFormData: {
        companyName: "",
        companyEmail: "",
        companyWebsite: "",
        productFocus: "",
        avatar: null
      },
      submitting: false,
      editMode: false,
      imagePicked: false,
    };
  },
  created() {
    this.setCompanyData();
  },
  watch: {
    user() {
      this.setCompanyData();
    }
  },
  computed: {
    ...mapGetters("USER", ["user", "currentOrganization"]),
    companyFirstLetter() {
      return this.currentOrganization
        ? this.currentOrganization.organization.name[0]
        : "";
    }
  },
  methods: {
    ...mapActions("USER", ["UPDATE_COMPANY_INFO"]),
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    getContent(c){
      if(!c || (c && c.trim().length == 0)) return 'Click to add data'
      return c
    },
    toggleEditMode(){
      this.editMode = !this.editMode
    },
    setCompanyData() {
      if (this.currentOrganization) {
        this.infoFormData.companyName = this.currentOrganization.organization.name;
        this.infoFormData.companyEmail = this.currentOrganization.organization.email;
        this.infoFormData.companyWebsite = this.currentOrganization.organization.website;
        this.infoFormData.productFocus = this.currentOrganization.organization.product_focus;
        this.infoFormData.avatar = this.currentOrganization.organization.avatar;
      }
    },
    async updateCompanyInfo() {
      if(this.submitting) return
      this.submitting = true;
      try {
        let payload = {
          name: this.infoFormData.companyName,
          email: this.infoFormData.companyEmail,
          website: this.infoFormData.companyWebsite,
          product_focus: this.infoFormData.productFocus,
          id: this.currentOrganization.organization.id,
        };
        if(this.imagePicked) payload.avatar = this.infoFormData.avatar
        await this.UPDATE_COMPANY_INFO(payload);
        this.imagePicked = false
        this.editMode = false
      } catch (e) {
        let errors = {};
        Object.keys(e).forEach(key => {
          errors[key.charAt(0).toUpperCase() + key.slice(1)] = e[key];
        });
        console.log(errors);
        this.$refs.formObserver.setErrors(errors);
      }
      this.submitting = false;
    },
    onAvatarFilePicked(e) {
      let file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.infoFormData.avatar = reader.result;
        this.imagePicked = true
      };
      reader.onerror = error => {
        console.log("Error: ", error);
      };
    },
    openAvatarPicker() {
      this.$refs.avatarFilePicker.click();
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../styles/account'
::v-deep .info-table
  td
    vertical-align: middle
</style>

<template>
  <div class="personal-info-form">
    <div class="dashboard-toolbar d-flex justify-content-between align-items-center mb-4">
      <p class="mb-0 dashboard-title-text text-left">Personal Information</p>
      <b-btn class="custom-btn save-btn ml-auto" @click="updateProfileInfo">
        <b-spinner small variant="light" class="mr-2" v-if="submitting"></b-spinner>
        <span v-else>Save</span>
      </b-btn>
    </div>
    <div class="table-section">
      <b-table class="shrink-table info-table" :fields="fields" :items="[infoFormData]">
        <template #cell(avatar)="row">
          <div class="avatar-form d-flex flex-column align-items-center justify-content-center" >
            <div class="user-avatar-large d-flex justify-content-center align-items-center mr-md-4">
              <img v-if="infoFormData.avatar" :src="infoFormData.avatar" alt="" class="w-100 h-100" />
              <span v-else class="gilroy-b">{{ user.first_name[0] }}</span>
              <div class="edit-btn">
                <b-icon icon="pencil-fill" scale="0.7" variant="light" @click="openAvatarPicker"></b-icon>
              </div>
            </div>
            <input ref="avatarFilePicker" type="file" style="display:none" @change="onAvatarFilePicked"/>
          </div>
        </template>
        <template #cell(firstName)="row">
          <span v-if="!editMode">{{getContent(row.item.firstName)}} {{getContent(row.item.lastName)}}</span>
          <b-row v-else class="mx-0">
            <b-col cols="12" md="6" class="px-0 px-md-2">
              <b-input v-model="infoFormData.firstName" class="input-field" placeholder="Fist Name"></b-input>
            </b-col>
            <b-col cols="12" md="6" class="px-0 px-md-2">
              <b-input v-model="infoFormData.lastName" class="input-field" placeholder="Last Name"></b-input>
            </b-col>
          </b-row>
          <b-icon icon="pencil-fill" scale="0.7" class="ml-3" v-if="!editMode" @click="toggleEditMode"></b-icon>
        </template>
        <template #cell(email)="row">
          <span v-if="!editMode">{{getContent(row.item.email)}}</span>
          <b-input v-else v-model="infoFormData.email" class="input-field" placeholder="Email Address"></b-input>
          <b-icon icon="pencil-fill" scale="0.7" class="ml-3" v-if="!editMode" @click="toggleEditMode"></b-icon>
        </template>
        <template #cell(role)="row">
          <b-select class="position-selector" :options="positionOptions" v-model="infoFormData.role" v-if="infoFormData.role != 0"></b-select>
          <span v-else class="r-txt">Owner</span>
        </template>
      </b-table>
    </div>
    <!-- <div class="form-part d-flex flex-column flex-md-row">
      <div class="info-form mt-3 mt-md-0">
        <b-row class="mx-0">
          <b-col cols="12" md="6" class="px-0 px-md-2">
            <b-input
              v-model="infoFormData.firstName"
              class="input-field"
              placeholder="Fist Name"
            ></b-input>
            <b-input
              v-model="infoFormData.lastName"
              class="input-field mt-3 mb-3 mb-md-0"
              placeholder="Last Name"
            ></b-input>
          </b-col>
          <b-col cols="12" md="6" class="px-0 px-md-2">
            <b-input
              v-model="infoFormData.email"
              class="input-field"
              placeholder="Email Address"
            ></b-input>
            <div class="position mt-3 mb-3 mb-md-0">
              <b-select
                class="position-selector"
                :options="positionOptions"
                v-model="infoFormData.role"
              ></b-select>
            </div>
          </b-col>
        </b-row>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BUS from '@/bus/event'
export default {
  data() {
    return {
      fields: [
        { key: 'avatar', label: 'Upload Logo' },
        { key: 'firstName', label: 'First Name & Last Name' },
        { key: 'email', label: 'Email Address' },
        { key: 'role', label: 'Company Role' },
      ],
      positionOptions: [
        { text: "Owner", value: 0 },
        { text: "Admin", value: 1 },
        { text: "Member", value: 2 }
      ],
      infoFormData: {
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        avatar: null
      },
      avatarFile: null,
      submitting: false,
      editMode: false,
      imagePicked: false,
    };
  },
  created() {
    this.setUserData();
  },
  watch: {
    user() {
      this.setUserData();
    }
  },
  computed: {
    ...mapGetters("USER", ["user", "currentOrganization"])
  },
  methods: {
    ...mapActions("USER", ["UPDATE_PROFILE"]),
    toggleEditMode(){
      this.editMode = !this.editMode
    },
    getContent(c){
      if(!c || (c && c.trim().length == 0)) return 'Click to add data'
      return c
    },
    setUserData() {
      this.infoFormData.firstName = this.user.first_name;
      this.infoFormData.lastName = this.user.last_name;
      this.infoFormData.email = this.user.email;
      this.infoFormData.avatar = this.user.avatar;
      this.infoFormData.role = this.currentOrganization.role;
    },
    async updateProfileInfo() {
      if(this.submitting) return
      this.submitting = true;
      try {
        let payload = {
          first_name: this.infoFormData.firstName,
          last_name: this.infoFormData.lastName,
          email: this.infoFormData.email,
        };
        if(this.imagePicked) payload.avatar = this.infoFormData.avatar
        await this.UPDATE_PROFILE(payload);
        BUS.$emit('fetch-organization-details')
        this.editMode = false
        this.imagePicked = false
      } catch (e) {
        console.log(e);
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
.position-selector
  width: min-content
  height: 42px
  width: 100%
  // padding: 8px 30px 8px 19px
  text-align: left
  background: #fff url('../../assets/images/svg/arrow.svg') no-repeat right 0.75rem center/16px 5px
  background-color: #fff
  border-radius: 6px
  border: solid 1px #edeef6
  font-family: GILROY-MEDIUM
  font-weight: normal
  font-stretch: normal
  font-style: normal
  line-height: 1.21
  letter-spacing: normal
  color: #CBCBCB
  &:focus
    outline: none
    box-shadow: none
.r-txt
  font-family: GILROY-MEDIUM
  font-weight: normal
  font-stretch: normal
  font-style: normal
  line-height: 1.21
  letter-spacing: normal
  color: #CBCBCB
</style>

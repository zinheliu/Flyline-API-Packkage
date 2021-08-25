<template>
  <div class="team-members-page pt-32-px pb-100-px">
    <div
      class="d-flex justify-content-center align-items-center"
      v-if="fetchingData"
    >
      <span class="text-primary">Fetching Data</span>
      <b-spinner small variant="primary" class="ml-2"></b-spinner>
    </div>
    <dashboard-card
      class="py-24-px px-2 px-md-3 no-team-members"
      v-if="!fetchingData && activeTeamMembers.length == 0"
    >
      <img src="@/assets/images/svg/no_team_member_data.svg" alt="" />
      <p class="mb-3 card-header-text gilroy-b text-center mt-4">
        No Team Members
      </p>
      <p class="mb-0 card-desc-text mx-md-auto">
        Have a team? Send them an invite. Your active team members and pending
        team invites will display on this page. If you have any question reach
        out to hello@flyline.io.
        <span
          class="gilroy-b text-primary cursor-pointer"
          @click="openInvModal"
          >Send an invite here!</span
        >
      </p>
      <!-- <b-btn class="custom-btn invite-member-btn gilroy-b mt-32-px" @click="openInvModal">Invite a Team Member</b-btn> -->
    </dashboard-card>
    <dashboard-card class="py-24-px px-2 px-md-3" v-else-if="!fetchingData">
      <div class="mx-0 d-flex justify-content-between">
        <p class="mb-3 card-header-text gilroy-b">Active Team Members</p>
        <b-btn
          v-if="currentOrganization.role != 2"
          class="custom-btn invite-member-btn gilroy-b mb-3 mb-md-0"
          @click="openInvModal"
        >
          <span class="d-none d-md-inline">Invite a Team Member</span>
          <span class="d-inline d-md-none">+</span>
        </b-btn>
      </div>
      <div class="table-section">
        <b-table
          class="shrink-table active-member-table"
          :items="activeTeamMembers"
          :fields="activeTeamMembersHeaders"
        >
          <template #cell(name)="row">
            <div class="team-member-info d-flex align-items-ccenter">
              <div
                class="user-avatar mini d-flex justify-content-center align-items-center mr-3"
              >
                <img
                  v-if="row.item.photo"
                  :src="row.item.photo"
                  alt=""
                  class="w-100 h-100"
                />
                <span class="gilroy-b" v-else>{{row.item.user.first_name[0]}}</span>
              </div>
              <p class="mb-0 d-flex align-items-center">
                {{ row.item.user.first_name }} {{ row.item.user.last_name }}
              </p>
            </div>
          </template>
          <template #cell(email)="row">
            <div class="h-100 d-flex align-items-center">
              {{ row.item.email }}
            </div>
          </template>
          <template #cell(position)="row">
            <div class="d-flex pb-3 pb-md-0">
              <div class="position">
                <!-- <b-select
                  v-if="row.item.role != 'Owner'"
                  class="position-selector"
                  :options="positionOptions"
                  v-model="row.item.role"
                ></b-select> -->
                <span class="ml-2 r-txt">{{row.item.role}}</span>
              </div>
            </div>
          </template>
          <template #cell(role)="row">
            <div class="d-flex pb-3 pb-md-0">
              <b-btn
                class="custom-btn remove-member-btn mr-4"
                @click="showDltWarning(row.item, 'MEMBER')"
                :disabled="
                  deletingMember &&
                    selectedMember &&
                    selectedMember.id == row.item.id
                "
              >
                <b-spinner
                  small
                  variant="light"
                  class="mr-2"
                  v-if="
                    deletingMember &&
                      selectedMember &&
                      selectedMember.id == row.item.id
                  "
                />
                Remove Member
              </b-btn>
            </div>
          </template>
        </b-table>
      </div>
    </dashboard-card>
    <dashboard-card
      class="py-24-px px-2 px-md-3 mt-32-px"
      v-if="!fetchingData && waitingTeamMembers.length > 0"
    >
      <p class="mb-3 card-header-text gilroy-b">Waiting Team Members</p>
      <div class="table-section">
        <b-table
          class="shrink-table waiting-member-table"
          :items="waitingTeamMembers"
          :fields="waitingTeamMembersHeaders"
        >
          <!-- <template #cell(name)="row">
            <div class="team-member-info d-flex align-items-ccenter">
              <div class="user-avatar mini d-flex justify-content-center align-items-center mr-3">
                <img v-if="row.item.photo" :src="row.item.photo" alt="" class="w-100 h-100">
                <span class="gilroy-b" v-else>Z</span>
              </div>
              <p class="mb-0 d-flex align-items-center">{{row.item.name}}</p>
            </div>
          </template> -->
          <template #cell(email)="row">
            <div class="h-100 d-flex align-items-center">
              {{ row.item.email }}
            </div>
          </template>
          <template #cell(status)="row">
            <div :class="['status px-3 py-1', row.item.invite_status]">
              {{ row.item.invite_status }}
            </div>
          </template>
          <template #cell(actions)="row">
            <b-btn
              class="custom-btn remove-member-btn"
              @click="showDltWarning(row.item)"
              :disabled="
                deletingMember &&
                  selectedMember &&
                  selectedMember.id == row.item.id
              "
            >
              <b-spinner
                small
                variant="light"
                class="mr-2"
                v-if="
                  deletingMember &&
                    selectedMember &&
                    selectedMember.id == row.item.id
                "
              />
              Remove Invite
            </b-btn>
          </template>
        </b-table>
      </div>
    </dashboard-card>
    <modal :modal="inviteModal" @change="toggleInviteModal">
      <invite-team-member-form @done="onInviteDone" />
    </modal>
    <modal :modal="showMemberRemovedModal" @change="toggleMemberRemovedModal">
      <team-member-removed
        @close="toggleMemberRemovedModal"
        @open-inv="closeRmvAndOpenInvModal"
      />
    </modal>
    <modal
      :modal="showMemberInvRemovedModal"
      @change="toggleMemberInvRemovedModal"
    >
      <team-member-inv-removed
        @close="toggleMemberInvRemovedModal"
        @open-inv="closeInvRmvAndOpenInvModal"
      />
    </modal>
    <modal-diff-size
      :modal="dltWarning"
      @change="toggleDltWarningModal"
      size="sm"
    >
      <delete-modal
        @close="toggleDltWarningModal"
        :successFunc="dltFunc"
        :param1="selectedMember"
      />
    </modal-diff-size>
  </div>
</template>

<script>
import DashboardCard from "@/components/Dashboard/DashboardCard";
import InviteTeamMemberForm from "@/components/Team/InviteTeamMemberForm";
import Modal from "@/components/Modals/Modal";
import ModalDiffSize from "@/components/Modals/ModalDiffSize";
import { mapActions, mapGetters } from "vuex";
import TeamMemberRemoved from "@/components/Team/TeamMemberRemoved";
import TeamMemberInvRemoved from "@/components/Team/TeamMemberInvRemoved";
import BUS from "@/bus/event";
import DeleteModal from '@/components/Modals/DeleteModal'
export default {
  components: {
    DashboardCard,
    InviteTeamMemberForm,
    Modal,
    TeamMemberRemoved,
    TeamMemberInvRemoved,
    DeleteModal,
    ModalDiffSize
  },
  data() {
    return {
      positionOptions: ["Member", "Admin", "Owner"],

      activeTeamMembersHeaders: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "position", label: "Company Role" },
        { key: "role", label: "Actions" },
      ],
      waitingTeamMembersHeaders: [
        { key: "email", label: "Email" },
        { key: "role", label: "Company Role" },
        { key: "status", label: "Status", },
        { key: "actions", text: "Actions" }
      ],

      members: [],

      inviteModal: false,
      fetchingData: true,
      selectedMember: null,
      deletingMember: false,
      showMemberRemovedModal: false,
      showMemberInvRemovedModal: false,
      dltWarning: false,
      dltFunc: null,
    };
  },
  created() {
    this.fetchMembers();
  },
  computed: {
    ...mapGetters("USER", ["currentOrganization"]),
    activeTeamMembers: {
      set(v) {},
      get() {
        return this.members.filter(m => m.invite_status == "Invite Approved");
      }
    },
    waitingTeamMembers: {
      set(v) {},
      get() {
        return this.members.filter(m => m.invite_status == "Invite Sent");
      }
    }
  },
  methods: {
    ...mapActions("ORGANIZATION", [
      "FETCH_ORGANIZATION_DETAILS",
      "DELETE_MEMBER"
    ]),
    closeRmvAndOpenInvModal() {
      this.toggleMemberRemovedModal();
      this.openInvModal();
    },
    closeInvRmvAndOpenInvModal() {
      this.toggleMemberInvRemovedModal();
      this.openInvModal();
    },
    showDltWarning(member, type){
      this.selectedMember = member
      if(type == 'MEMBER'){
        this.dltFunc = this.removeMember
      }else {
        this.dltFunc = this.removeInvMember
      }
      this.dltWarning = true
    },
    async removeMember(member) {
      this.selectedMember = member;
      console.log(member);
      this.deletingMember = true;
      try {
        let payload = {
          orgId: this.currentOrganization.organization.id,
          memberId: member.id
        };
        await this.DELETE_MEMBER(payload);
        await this.fetchMembers();
        this.showMemberRemovedModal = true;
      } catch (e) {
        console.log(e.detail);
        BUS.$emit("warning-msg-modal", e.detail);
      }
      this.deletingMember = false;
    },
    async removeInvMember(member) {
      this.selectedMember = member;
      console.log(member);
      this.deletingMember = true;
      try {
        let payload = {
          orgId: this.currentOrganization.organization.id,
          memberId: member.id
        };
        await this.DELETE_MEMBER(payload);
        await this.fetchMembers();
        this.showMemberInvRemovedModal = true;
      } catch (e) {
        console.log(e);
        BUS.$emit("warning-msg-modal", e.detail);
      }
      this.deletingMember = false;
    },
    onInviteDone() {
      this.toggleInviteModal();
      this.fetchMembers();
    },
    async fetchMembers() {
      this.fetchingData = true;
      try {
        let res = await this.FETCH_ORGANIZATION_DETAILS(
          this.currentOrganization.organization.id
        );
        this.members = res.members;
      } catch (e) {
        console.log(e);
      }
      this.fetchingData = false;
    },
    async deleteMember(member) {
      this.deletingMember = true;
      try {
        let res = await this.DELETE_MEMBER(
          this.currentOrganization.organization.id
        );
      } catch (e) {
        console.log(e);
      }
      this.deletingMember = false;
    },
    toggleInviteModal(v) {
      if (v != this.inviteModal) this.inviteModal = false;
    },
    toggleMemberRemovedModal(v) {
      if (v != this.showMemberRemovedModal) this.showMemberRemovedModal = false;
    },
    toggleDltWarningModal(v) {
      if (v != this.dltWarning)
        this.dltWarning = false;
      this.selectedMember = null
    },
    toggleMemberInvRemovedModal(v) {
      if (v != this.showMemberInvRemovedModal)
        this.showMemberInvRemovedModal = false;
    },
    openInvModal(){
      if(this.currentOrganization.role != 2)
        this.inviteModal = true
    },
  }
};
</script>

<style lang="sass" scoped>
.team-members-page
  @media screen and (max-width: 800px)
    margin: 40px 0
.invite-member-btn
  font-size: 14px
  font-weight: 600
  font-stretch: normal
  font-style: normal
  line-height: 1.21
  letter-spacing: normal
  height: 32px
  color: #ffffff
.card-header-text
  font-size: 20px
  font-stretch: normal
  font-style: normal
  line-height: 1.45
  letter-spacing: normal
  text-align: left
  color: #333333
.position-selector
  width: min-content
  height: 32px
  font-size: 14px
  // padding: 8px 30px 8px 19px
  text-align: left
  background: #fff url('../../assets/images/svg/arrow.svg') no-repeat right 0.75rem center/16px 5px
  background-color: #fff
  border-radius: 6px
  border: solid 1px #edeef6
  font-size: 14px
  font-weight: 600
  font-stretch: normal
  font-style: normal
  line-height: 1.21
  letter-spacing: normal
  color: #546d8a
  &:focus
    outline: none
    box-shadow: none
::v-deep .active-member-table
  tbody
    td
      @media screen and (min-width: 769px)
        &:last-child
          width: 200px
::v-deep .waiting-member-table
  tbody
    td
      @media screen and (min-width: 769px)
        &:nth-child(3)
          width: 200px
          height: 32px
        &:last-child
          width: 150px
          height: 32px
  thead
    th
      &.status-th
        width: 300px
      @media screen and (min-width: 769px)
        // &:nth-child(3)
        //   width: 124px
        &:last-child
          width: 24px
.status
  border-radius: 4px
  font-size: 14px
  font-weight: 600
  font-stretch: normal
  font-style: normal
  line-height: 1.21
  letter-spacing: normal
  min-width: 80px
  max-width: 110px
  background-color: #203BE7
  color: #ffffff
  height: 32px
  display: flex
  align-items: center
  &.Expired
    color: #ffffff
    background-color: #ff7272

.no-team-members
  .card-desc-text
    max-width: 492px
    font-size: 14px
    font-weight: 500
    font-stretch: normal
    font-style: normal
    line-height: 2.14
    letter-spacing: normal
    color: #8e969f

.remove-member-btn
  font-size: 14px
  font-weight: 600
  font-stretch: normal
  font-style: normal
  line-height: 1.21
  letter-spacing: normal
  height: 32px
  background-color: #EA4D44
  border: none
  &:hover, &:active, &:focus
    background-color: #EA4D44 !important

.r-txt
  font-size: 14px
  font-weight: 600
  font-stretch: normal
  font-style: normal
  line-height: 1.21
  letter-spacing: normal
  color: #546d8a
</style>

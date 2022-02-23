<template>
  <div :style="{ marginTop: '30px' }">
    <a-card
      title="Crystal"
      style="width: 320px"
      :headStyle="{ fontSize: '35px', fontWeight: '500' }"
    >
      <template #extra>
        <a @click="balanceOf" :style="{ fontSize: '20px' }">Update</a>
      </template>
      <div class="content">
        <a-card hoverable @click="openModal()">
          <div class="card">
            <img src="/images/ic_mec.png" />
            <text>Mec</text>
            <text>{{ mecSizeText }}</text>
          </div>
        </a-card>
      </div>
    </a-card>
    <box-mec-modal
      img="/images/ic_mec.png"
      text="Mec"
      v-model:visible="visible"
      v-model:address="address"
      v-model:amount="amount"
      :min="1"
      :max="mec"
      @closeModal="closeModal"
      @transfer="transfer"
    />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import BoxMecModal from "./BoxMecTransferModal.vue";
export default {
  name: "MecView",
  components: {
    BoxMecModal,
  },
  computed: {
    ...mapState("mec", ["mec", "modalVisible", "modalInput"]),
    ...mapState("accounts", ["targetAddress"]),
    mecSizeText() {
      if (this.mec) {
        return "x" + this.mec;
      } else {
        return "x" + "0";
      }
    },
    visible: {
      get() {
        return this.modalVisible;
      },
      set(value) {
        this.$store.commit("mec/updateModalVisible", value);
      },
    },
    amount: {
      get() {
        return this.modalInput;
      },
      set(value) {
        this.$store.commit("mec/updateModalInput", value);
      },
    },
    address: {
      get() {
        return this.targetAddress;
      },
      set(value) {
        this.$store.commit("accounts/updateTargetAddress", value);
      },
    },
  },
  methods: {
    ...mapActions("mec", ["balanceOf", "openModal", "closeModal", "transfer"]),
  },
};
</script>
<style scoped>
.title {
  font-size: 25px;
  font-weight: 500;
  margin-top: 100px;
}
.content {
  display: flex;
  justify-content: sp;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
}
img {
  width: 100px;
  height: 100px;
}
</style>

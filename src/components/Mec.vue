<template>
  <div :style="{ marginTop: '30px' }">
    <a-card
      title="Crystal"
      style="width: 490px"
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
    <a-modal
      v-model:visible="modalVisible"
      title="Transfer"
      @cancel="closeModal"
      @ok="transfer"
      width="300px"
      okText="Transfer"
      cancelText="Close"
    >
      <div class="card">
        <img src="/images/ic_momo_box.png" />
        <text>Mec</text>
        <a-input-number
          id="inputNumber"
          :style="{ marginTop: '5px' }"
          v-model:value="modalSizeInput"
          :min="1"
          :max="mec"
        />
        <a-input
          :style="{ marginTop: '10px' }"
          v-model:value="targetAddressInput"
          placeholder="Target Address"
        />
      </div>
    </a-modal>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "MecView",
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
    modalSizeInput: {
      get() {
        return this.modalInput;
      },
      set(value) {
        this.$store.commit("mec/updateModalInput", value);
      },
    },
    targetAddressInput: {
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

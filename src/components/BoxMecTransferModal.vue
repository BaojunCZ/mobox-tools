<template>
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
      <img :src="img" />
      <text>{{ text }}</text>
      <a-input-number
        id="inputNumber"
        :style="{ marginTop: '5px' }"
        v-model:value="sizeInput"
        :min="min"
        :max="max"
      />
      <a-input
        :style="{ marginTop: '10px' }"
        v-model:value="targetAddressInput"
        placeholder="Target Address"
      />
    </div>
  </a-modal>
</template>

<script>
export default {
  name: "BoxMecModal",
  props: {
    img: String,
    text: String,
    visible: Boolean,
    address: String,
    amount: String,
    min: Number,
    max: Number,
  },
  emits: ["update:visible", "update:address", "update:amount"],
  computed: {
    modalVisible: {
      get() {
        return this.visible;
      },
      set(value) {
        this.$emit("update:visible", value);
      },
    },
    targetAddressInput: {
      get() {
        return this.address;
      },
      set(value) {
        this.$emit("update:address", value);
      },
    },
    sizeInput: {
      get() {
        return this.amount;
      },
      set(value) {
        this.$emit("update:amount", value);
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    transfer() {
      this.$emit("transfer");
    },
  },
};
</script>

<style scoped>
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

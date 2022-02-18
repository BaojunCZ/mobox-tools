<template>
  <div>
    <text class="title">Mobox Tools</text>
    <text @click="requestAccount" v-if="myAccount === ''">Connect</text>
    <text class="address" v-else>{{ showAddress }}</text>
  </div>
</template>

<script>
export default {
  name: "TitleView",
  created() {
    this.requestAccount();
  },
  data() {
    return {
      myAccount: "",
    };
  },
  methods: {
    async requestAccount() {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      this.myAccount = accounts[0];
    },
  },
  computed: {
    showAddress() {
      console.log(this.myAccount);
      if (this.myAccount === "") {
        return "";
      } else {
        return (
          this.myAccount.substring(0, 8) + "...." + this.myAccount.substring(36)
        );
      }
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-weight: 700;
}
text {
  font-size: 30px;
}
.address {
  font-size: 20px;
}
</style>

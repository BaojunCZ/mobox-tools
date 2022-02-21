<template>
  <a-card
    title="MOMO Token"
    :headStyle="{ fontSize: '35px', fontWeight: '500' }"
    :style="{ marginTop: '30px', width: '490px' }"
  >
    <div class="content">
      <a-card>
        <div class="card">
          <a-button :style="{ marginTop: '10px' }" type="primary" @click="query"
            >Query</a-button
          >
          <text>{{ ids }}</text>
          <a-input
            :style="{ marginTop: '10px' }"
            v-model:value="inputId"
            placeholder="ID"
          />
          <a-button
            :style="{ marginTop: '10px' }"
            type="primary"
            @click="transfer"
            >Transfer</a-button
          >
        </div>
      </a-card>
    </div>
  </a-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "RareMomo",
  computed: {
    ...mapState("rareMomo", ["id", "ids"]),
    inputId: {
      get() {
        return this.id;
      },
      set(value) {
        this.$store.commit("rareMomo/updateId", value);
      },
    },
  },
  methods: {
    ...mapActions("rareMomo", ["transfer", "query"]),
  },
};
</script>

<style>
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
</style>

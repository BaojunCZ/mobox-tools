<template>
  <div :style="{ marginTop: '30px' }">
    <a-card
      title="Box"
      style="width: 500px"
      :headStyle="{ fontSize: '35px', fontWeight: '500' }"
    >
      <template #extra>
        <a @click="balanceOfAll" :style="{ fontSize: '20px' }">Update</a>
      </template>
      <div class="content">
        <a-card hoverable style="width: 240px" @click="openModal(1)">
          <div class="card">
            <img src="/images/ic_momo_box.png" />
            <text>Momo Box</text>
            <text>{{ momoBoxSizeText }}</text>
          </div>
        </a-card>
        <a-card
          hoverable
          :style="{ width: '240px', marginLeft: '20px' }"
          @click="openModal(2)"
        >
          <div class="card">
            <img src="/images/ic_mec_box.png" />
            <text>Mec Box</text>
            <text>{{ mecBoxSizeText }}</text>
          </div>
        </a-card>
      </div>
    </a-card>
    <a-modal
      v-model:visible="modalVisible"
      title="Transfer"
      @cancel="closeModal"
      width="300px"
    >
      <div class="card">
        <img :src="modalImage" />
        <text>{{ modalBoxName }}</text>
        <a-input-number
          id="inputNumber"
          v-model:value="modalSizeInput"
          :min="1"
          :max="modalBoxSize"
        />
      </div>
    </a-modal>
  </div>
</template>
<script src="./index.js" />
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
}
img {
  width: 100px;
  height: 100px;
}
</style>

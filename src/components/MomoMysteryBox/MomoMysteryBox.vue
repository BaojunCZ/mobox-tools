<template>
  <div :style="{ marginTop: '30px' }">
    <a-card
      title="Box"
      style="width: 490px"
      :headStyle="{ fontSize: '35px', fontWeight: '500' }"
    >
      <template #extra>
        <a @click="balanceOfAll" :style="{ fontSize: '20px' }">Update</a>
      </template>
      <div class="content">
        <a-card hoverable @click="openModal(1)">
          <div class="card">
            <img src="/images/ic_momo_box.png" />
            <text>Momo Box</text>
            <text>{{ momoBoxSizeText }}</text>
          </div>
        </a-card>
        <a-card hoverable :style="{ marginLeft: '20px' }" @click="openModal(2)">
          <div class="card">
            <img src="/images/ic_mec_box.png" />
            <text>Mec Box</text>
            <text>{{ mecBoxSizeText }}</text>
          </div>
        </a-card>
      </div>
    </a-card>
    <box-mec-modal
      :img="modalImage"
      :text="modalBoxName"
      v-model:visible="visible"
      v-model:address="address"
      v-model:amount="amount"
      :min="1"
      :max="modalBoxSize"
      @closeModal="closeModal"
      @transfer="transfer"
    />
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
  padding: 10px 30px;
}
img {
  width: 100px;
  height: 100px;
}
</style>

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
        <a-card hoverable style="width: 240px">
          <div>
            <img src="../../assets/ic_momo_box.png" />
            <text>Momo Box</text>
            <text>{{ momoBoxSizeText }}</text>
          </div>
        </a-card>
        <a-card hoverable :style="{ width: '240px', marginLeft: '20px' }">
          <div>
            <img src="../../assets/ic_mec_box.png" />
            <text>Mec Box</text>
            <text>{{ mecBoxSizeText }}</text>
          </div>
        </a-card>
      </div>
    </a-card>
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
.content div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 100px;
  height: 100px;
}
</style>

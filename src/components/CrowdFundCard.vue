<template>
  <div class="mt-8 pb-8 glob-crowd " :class="nrLeft==0 && 'text-gray-400' ">
    <div class="flex justify-between">
        <p class="font-black">{{name}}</p>
        <p class="text-sm text-green-500">Pledge {{pledge}} or more</p>
    </div>
    <div>
        <p  :class="nrLeft==0 ? 'text-gray-400 text-sm' :'text-gray-700 text-sm' ">
        {{description}}
        </p>
    </div>
    <div class="flex mt-4 justify-between">
        <p class="font-black text-xl">{{nrLeft}}<span class="text-sm">left</span> </p>
        <button v-if="nrLeft" class="bg-green-700 rounded-3xl p-2 btn font-bold text-white">Select Reward</button>
        <button disabled v-if="nrLeft == 0" class="bg-gray-400 rounded-3xl p-2 btn font-bold text-white">Out of stock</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CrowdFundCard",
  props:{
      name: String,
      pledge: String,
      nrLeft: Number,
      description: String
  }
};
</script>
<style>
.glob-crowd{
    border: solid 1px;
    border-radius: 15px;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
}
</style>

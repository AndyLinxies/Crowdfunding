<template>
    <div>
        <div class="glob-img">
            <div class="flex pt-3 justify-around">
                <div>
                    <p class="text-semibold text-white">Crowdfund</p>
                </div>
                <div class="flex">
                    <button class=" text-white mr-4">About</button>
                    <button class=" text-white mr-4">Discover</button>
                    <button class=" text-white mr-4">Get Started</button>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style>
.glob-img{
    background-image: url("../assets/image-hero-desktop.jpg");
    width: 100%;
    height: 30vh;
    z-index: 0;
}

</style>
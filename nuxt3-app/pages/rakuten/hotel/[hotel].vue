<script setup lang="ts">

import axios from 'axios'
const route = useRoute()

let url = '/api/rakuten/hotel/' + route.params.hotel
let hotelData = {}

const options = {
    url,
    method: 'get',
}

await axios(options).then((res: AxiosResponse<USER[]>) => {
    const { data, status } = res;

    hotelData = data;
    console.dir(data);

}).catch((e: AxiosError<{ error: string }>) => {
        // console.log(e.message);
    })


</script>

<template>

    <div>
        <h1>ホテル詳細</h1>
        <div v-if="hotelData.hotels">
            <div>{{ hotelData.hotels[0].hotel[0].hotelBasicInfo.hotelName }}</div>
            <div>{{ hotelData.hotels[0].hotel[0].hotelBasicInfo.postCode }}</div>
            <div>{{ hotelData.hotels[0].hotel[0].hotelBasicInfo.address1 }}</div>
            <div>{{ hotelData.hotels[0].hotel[0].hotelBasicInfo.address2 }}</div>
            <div>
                latitude: {{ hotelData.hotels[0].hotel[0].hotelBasicInfo.latitude }}
                longitude: {{ hotelData.hotels[0].hotel[0].hotelBasicInfo.longitude }}
            </div>
<!--            <pre>{{ hotelData.hotels[0].hotel }}</pre>-->
        </div>
<!--        <div><pre>{{ hotelData.hotels }}</pre></div>-->
    </div>
</template>

<style scoped>

</style>

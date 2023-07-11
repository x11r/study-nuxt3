<script setup lang="ts">

import axios from 'axios'

const route = useRoute();

const { id } = route.params;

let url = '/api/rakuten/hotels?'
url = url + 'middle=' + route.params.middle
url = url + '&small=' + route.params.small
if (route.params.detail) {
    url = url + '&detail=' + route.params.detail
}

let hotels = [];
const options = {
    url,
    method: 'get',
}

await axios(options).then((res: AxiosResponse<USER[]>) => {
    const { data, status } = res;

    hotels = data
})
    .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message);
    })

</script>

<template>
    <div>
        <h1>ホテル情報</h1>
    </div>
    <div>
        <div v-for="(hotel, index) in hotels.hotels" >
            <h2>
                <nuxt-link :to="`/rakuten/hotel/${hotel.hotel[0].hotelBasicInfo.hotelNo}`">
                {{ hotel.hotel[0].hotelBasicInfo.hotelName }}
                </nuxt-link>
            </h2>
            <div>{{ hotel.hotel[0].hotelBasicInfo.hotelSpecial }}</div>
            <div>{{ hotel.hotel[0].hotelBasicInfo.postalCode }}</div>
            <div>{{ hotel.hotel[0].hotelBasicInfo.address1 }}</div>
            <div>{{ hotel.hotel[0].hotelBasicInfo.address2 }}</div>
            <div>
                Tel:{{ hotel.hotel[0].hotelBasicInfo.telephoneNo }}
                Fax:{{ hotel.hotel[0].hotelBasicInfo.faxNo }}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

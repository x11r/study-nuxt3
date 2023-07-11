<script>
import axios from 'axios'
export default {
    data: function () {
        return {
            rakutenAreas: [],
            rakutenHotels: [],
        }
    },
    mounted() {
        //
    },
    created() {
        this.getAreas()
    },
    methods: {
        getAreas () {
            const url = '/api/rakuten/areas'
            axios
                .get(url)
                .then(response => {
                    this.rakutenAreas = response.data.areas.areaClasses.largeClasses[0].largeClass
                })
                .catch(error => {})
        },
    }
}

</script>

<template>
    <div>
        <h1>楽天top</h1>
        <div v-if="rakutenAreas.length > 0">
            <div v-for="(middleClass, index) in rakutenAreas[1].middleClasses">
                <div>{{ middleClass.middleClass[0].middleClassName }}</div>
                <div>
                    <ul>
                        <li v-for="(smallClass, index2) in middleClass.middleClass[1].smallClasses">
                            <span v-if="smallClass.smallClass[1]">
                                {{ smallClass.smallClass[0].smallClassName }}
                            </span>
                            <ul v-if="smallClass.smallClass[1]">
                                <li v-for="detailClass in smallClass.smallClass[1].detailClasses">
                                    <nuxt-link :to="`/rakuten/area/${middleClass.middleClass[0].middleClassCode}/${smallClass.smallClass[0].smallClassCode}/${detailClass.detailClass.detailClassCode}`">
                                    {{ detailClass.detailClass.detailClassName }}
                                    </nuxt-link>
                                </li>
                            </ul>
                            <div v-else>
                                <nuxt-link :to="`/rakuten/area/${middleClass.middleClass[0].middleClassCode}/${smallClass.smallClass[0].smallClassCode}`">
                                    {{ smallClass.smallClass[0].smallClassName }}
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

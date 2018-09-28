<template>
  <div>
    <header-search :cities="cities"></header-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    >
    </city-list>
    <alphabet
      :city="cities"
      @change="handleLetterClick"
    ></alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderSearch from './components/search'
import CityList from './components/list'
import Alphabet from './components/alphabet'
export default {
  name: 'JavaScript',
  components: {
    HeaderSearch,
    CityList,
    Alphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleHetCityInfo)
    },
    handleHetCityInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterClick (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped lang="scss">

</style>

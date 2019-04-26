const getCar = (name, model, year, owner, phone, image) => ({name, model, year, owner, phone, image})

const cars = [
  getCar ('Ford', 'Focus', 2015, 'Max', '+38 099 123 45 67','img/tractor1.jpg'),
  getCar ('Ford', 'Model T', 1930, 'Henry', '+38 099  111 22 33','img/tractor2.jpg'),
  getCar ('Porshe', 'Panamera', 2017, 'John', '+38 099 444 55 66','img/tractor3.jpg')
  
]

var app = new Vue ({
  el: '#app',
  data: {
    cars: cars,
    car: cars[0],
    selectedCarIndex: 0,
    phoneVisible: false,
    search: '',
    modalVisible: false,
  },
  methods: {
    selectCar: function(index) {
      this.car = cars[index];
      this.selectedCarIndex = index;
    }
  },
  computed: {
    PhoneBtnText() {
      return this.phoneVisible ? 'Hide phone' : 'Show phone'
    },
    filteredCars() {
      return this.cars.filter(car => {
        return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
      })
    },
  }
})
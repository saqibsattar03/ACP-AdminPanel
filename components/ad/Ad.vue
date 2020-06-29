<template>
  <v-container>
    <div style="margin-top: 30px">
      <div class="my-card" style="padding: 0">
        <p style="padding-top: 15px;padding-left: 15px">Ads</p>
        <div style="display: flex;margin: 10px">
          <v-btn-toggle dense>
            <v-btn>All Ads </v-btn>
            <v-btn>New Ads </v-btn>

            <v-btn>
              Featured Ads
            </v-btn>

            <v-btn>
              Killer Deals
            </v-btn>
            <v-btn>Featured Ads </v-btn>
          </v-btn-toggle>
          <v-spacer />
          <v-btn href="/ad/form" style="background-color: #17A2B8" dark
            >+Add New</v-btn
          >
        </div>
        <div style="display: flex">
          <v-spacer />
          <div>
            <v-text-field
              style="margin-right: 10px; width: 200px"
              outlined
              dense
              label="Search..."
            ></v-text-field>
          </div>
        </div>
        <div style="width: 100%">
          <v-data-table
            :headers="headers"
            :items="items"
            height="100%"
            :items-per-page="5"
          >
            <template v-slot:item.status="{ item }">
              <v-btn :color="getColor(item.status)" small depressed dark>{{
                item.status
              }}</v-btn>
            </template>
          </v-data-table>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Ad',
  data() {
    return {
      headers: [
        { text: '#', value: 'no' },
        { text: 'SUB CATEGORY', value: 'subcategory' },
        { text: 'DESCRIPTION', value: 'description' },
        { text: 'STATUS', value: 'status' },
        { text: 'PRICE', value: 'price' },
        { text: 'ADMIN COM', value: 'admincom' },
        { text: 'CONTROL', value: 'control' },
        { text: 'STATE', value: 'state' }
      ],
      items: [
        {
          no: '1',
          subcategory: 'abc',
          description: 'national',
          status: 'not active',
          price: '12',
          admincom: '0',
          control: 'Make Feature',
          state: 'cancel'
        },
        {
          no: '2',
          subcategory: 'abc',
          description: 'national',
          status: 'active',
          price: '12',
          admincom: '0',
          control: 'Make Feature',
          state: 'cancel'
        },
        {
          no: '3',
          subcategory: 'abc',
          description: 'national',
          status: 'not active',
          price: '12',
          admincom: '0',
          control: 'Make Feature',
          state: 'cancel'
        },
        {
          no: '4',
          subcategory: 'abc',
          description: 'national',
          status: 'rejected',
          price: '12',
          admincom: '0',
          control: 'Featured',
          state: 'cancel'
        },
        {
          no: '5',
          subcategory: 'abc',
          description: 'national',
          status: 'active',
          price: '12',
          admincom: '0',
          control: 'Make Feature',
          state: 'cancel'
        },
        {
          no: '6',
          subcategory: 'abc',
          description: 'national',
          status: 'not active',
          price: '12',
          admincom: '0',
          control: 'Make Feature',
          state: 'cancel'
        },
        {
          no: '7',
          subcategory: 'abc',
          description: 'national',
          status: 'not active',
          price: '12',
          admincom: '0',
          control: 'Make Feature',
          state: 'cancel'
        },
        {
          no: '8',
          subcategory: 'abc',
          description: 'national',
          status: 'active',
          price: '12',
          admincom: '0',
          control: 'Make Feature',
          state: 'cancel'
        }
      ]
    }
  },
  methods: {
    getColor(status) {
      if (status === 'active') return 'green'
      else if (status === 'not active') return 'blue'
      else return 'red'
    }
  }
}
</script>

<style lang="sass">
.v-data-table-header
  background: #eff0f5

.status-card
  display: flex

  &__info
    display: flex
    padding-left: 25px
    flex-direction: column
</style>

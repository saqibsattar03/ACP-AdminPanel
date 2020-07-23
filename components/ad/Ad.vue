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
            :items="products"
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
  props: {
    products: Array
  },

  data() {
    return {
      headers: [
        { text: 'NAME', value: 'name' },
        { text: 'DESCRIPTION', value: 'description' },
        { text: 'STATUS', value: 'status' },
        { text: 'PRICE', value: 'price' },
        { text: 'ADMIN COM', value: 'adminCommission' }
      ]
    }
  },
  methods: {
    getColor(status) {
      if (status === 'true') {
        return 'green'
      } else return 'red'
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

<template>
  <div>
    <b-form method="POST" @submit="onSubmit" @reset="onReset" v-if="show" id="addNewAppointment">

      <!-- device -->
      <b-form-group id="device"
        label="Choose your device:"
        label-for="device">
        <v-select :options="alldevice" placeholder="--select device--" v-model="form.device"></v-select>
      </b-form-group>

      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="true">Are you sure to create appointment with us ?</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary" class="submitBtn">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { GET_ALL_DEVICE } from '../store/modules/appointment/mutation-types.js'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  data () {
    return {
      form: {
        device: null,
        checked: []
      },
      show: true
    }
  },
  computed: {
    ...mapState({profile: state => state.user.profile}),
    ...mapGetters([
      'alldevice'
    ])
  },
  methods: {
    getDevices: function () {
      this.$store.dispatch(GET_ALL_DEVICE)
    },
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.device = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  },
  beforeMount () {
    this.getDevices()
  }
}
</script>

<style src="../assets/css/appointment.css"></style>


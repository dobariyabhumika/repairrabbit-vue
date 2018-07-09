<template>
  <div class="dashboard">
    <p v-if="profile.name">
      <strong>Name:</strong> {{profile.name}}
    </p>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'dashboard',
  computed: mapState({profile: state => state.user.profile})
}

</script>

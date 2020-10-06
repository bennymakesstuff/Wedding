<template>
  <div class="application">
    <h1>My Account</h1>
    <p>Make changes to your account.</p>
    <pane size="full" title="Personal Details" color="#787878">
      <icon-base slot="pane-icon" width="50px" height="50px"><user-icon/></icon-base>
      <personal-details slot="pane-content" />
    </pane>
    <pane v-if="PaymentMethod" size="full" title="Payment Methods" color="#787878">
      <icon-base slot="pane-icon" width="50px" height="50px"><shield-icon/></icon-base>
      <payment-methods slot="pane-content"/>
    </pane>
    <pane size="full" title="Security" color="#787878">
      <icon-base slot="pane-icon" width="50px" height="50px"><shield-icon/></icon-base>
      <personal-security slot="pane-content"/>
    </pane>
  </div>
</template>


<script>
import Pane from '../../../ui/pane.vue';
import PersonalDetails from './Personal_Details.vue';
import PersonalSecurity from './Personal_Security.vue';
import PaymentMethods from './Payment_Methods.vue';
import IconBase from '../../../ui/icons/icon-base.vue';
import IconShieldLock from '../../../ui/icons/icon-shield-lock.vue';
import IconPersonFill from '../../../ui/icons/icon-person-fill.vue';

export default {
  name: 'account',
  components: {
    'pane':Pane,
    'personal-details': PersonalDetails,
    'personal-security': PersonalSecurity,
    'payment-methods':PaymentMethods,
    'icon-base': IconBase,
    'shield-icon': IconShieldLock,
    'user-icon': IconPersonFill
  },
  data: function(){
    return {
      //PaymentMethod: false
    }
  },
};

</script>

<style lang="scss" scoped>
.application {font-size: 0.8rem;
              height: auto;
              text-align: left;
              padding: 0.5rem;
              padding-bottom: 8rem;

  h1 {font-size: 1.5rem;
      margin: 0;}
}
</style>

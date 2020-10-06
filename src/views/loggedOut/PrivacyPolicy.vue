<template>
  <div class="home">
    <h1>Privacy Policy</h1>
    <h3>Last Updated: 8th September 2020</h3>
    <p>The information we collect and what we do with it is outlined below.</p>
    <p>If there are any querries or concerns around this, please get in touch with us for further clarification.</p>
    <section>
      <h2>Defenitions</h2>
      <p>For the purpose of the following paragraphs these defenitions are applied.</p>
      <p>"HIHT" means the business "Have I Had This."</p>
      <p>"us" means the business "Have I Had This and it's employees and contractors"</p>
      <p>"our employees" means "Have I Had This employees and contractors"</p>
      <p>"our partners" means "Breweries or Venues"</p>
      <p>"yourself or you" means you as a user of the platform.</p>
      <p>"other users" means users of the platform.</p>
    </section>
    <section>
      <h2>What data and information do we collect?</h2>
      <p>The information we collect consists of the following;</p>
      <p><b>- Personal Details;</b></p>
      <p>&nbsp;&nbsp;- Name</p>
      <p>&nbsp;&nbsp;- Age</p>
      <p>&nbsp;&nbsp;- Email Addresses</p>
      <p>&nbsp;&nbsp;- Password(s)</p>
      <p>&nbsp;&nbsp;- Mobile Number</p>
      <p>&nbsp;&nbsp;- Physical / Postal Addresses</p>
      <p>&nbsp;&nbsp;- Any other information you choose to supply</p>
      <p><b>- Brewery and Venue Details;</b></p>
      <p>&nbsp;&nbsp;- Name</p>
      <p>&nbsp;&nbsp;- Entity Name</p>
      <p>&nbsp;&nbsp;- Email Addresses</p>
      <p>&nbsp;&nbsp;- Password(s)</p>
      <p>&nbsp;&nbsp;- Contact Number(s)</p>
      <p>&nbsp;&nbsp;- Physical / Postal Addresses</p>
      <p>&nbsp;&nbsp;- Descriptions</p>
      <p>&nbsp;&nbsp;- Any other information the partner supplies.</p>
    </section>
    <section>
      <h2>How do we use this information and data</h2>
      <p>This information is used for the following purposes;</p>
      <p>- Keeping accounts relevant and up to date</p>
      <p>- Providing us and our partners with insights and statistics on trends and demographics.</p>
      <p>- Helping us make informed business decisions about our platform.</p>
      <p>- Helping us make decisions around feature releases / depreciations.</p>
      <p>- Providing relevant information to you and other users.</p>
    </section>
    <section>
      <h2>Who has access to this information and data</h2>
      <p>Only HIHT and our employees have access to the raw data in our database.</p>
      <p>Our partners have access to insights / metrics we provide for them.</p>
      <p>Yourself and other users of the platform have access to content provided in feeds and profiles.</p>
      <p>Yourself, HIHT and it's employee's have access to view your account and all it's associated details.</p>
    </section>
    <section>
      <h2>How do you delete your own information and data</h2>
      <p>Deleting or removing your information is important.</p>
      <p>For our purposes we do need to retain some information. The solution we offer is to be able to remove any identifiable information from your account and have it converted to a non accessible anonymous account we are refering to as an "archived account". The result is that we have accurate records, and there is no information left identifiable to you.</p>
    </section>
    <section>
      <h2>Changes to the Privacy Policy</h2>
      <p>We reserve the right to change the privacy policy at any time.</p>
      <p>Upon doing this a "Last Updated" date will be displayed below the title of the policy and you will be notified of a change upon first login after the change.</p>
      <p>By continuing to use the platform after the notification you accept the policy changes.</p>
      <p>If you do not agree to the changes, you may choose to delete your account.</p>
      <p>We retain copies of our privacy policy and its previous versions for reference.</p>
    </section>
  </div>
</template>

<script>

export default {
  name: "PrivacyPolicy",
  components: {

  },
  data: function(){
    return {}
  },
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';

@font-face {
  font-family: 'goma';
  src: url('../../ui/goma_block.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.home {padding: 1rem;}

h1 {font-size: 1.5rem;
    font-family: 'goma';
    text-align: left;}

h3 {font-size: 0.9rem;
    text-align: left;
    margin-bottom: 1.5rem;}

p {font-size: 1rem;
  text-align: left;}

section {margin: 1.8rem 0rem;
        text-align: left;

  h2 {font-size: 1.2rem;
    font-family: 'goma';}
  p {margin-bottom: 0.25rem;}
}

</style>

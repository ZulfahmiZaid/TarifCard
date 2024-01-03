<template>
  <v-card width="350" class="tarifcard">

    <v-icon icon="mdi-play-circle" class="playbutton"/>

    <v-card-title class="cardtitle">
        Free Access to Acme Music
      <v-icon icon="mdi-alpha-r-circle-outline"/>
    </v-card-title>

    <v-card-subtitle class="cardsubtitle">
      <v-icon icon="mdi-check"/>
        Stream 60 million songs on your device
    </v-card-subtitle>

    <v-card-subtitle class="cardsubtitle">
      <v-icon icon="mdi-close"/>
        No internet access
    </v-card-subtitle>

    <v-card-actions class="cardactions">
      Connect now
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
  name: "TarifCard"
}
</script>

<style scoped>
  .tarifcard{
    height: 450px;
    padding: 10px;
    border-radius: 10px;
  }
  .playbutton{
    display: grid;
    place-items: center;
    font-size: 3.5rem;
  }
  .cardtitle{
    text-align: center;
  }
  .cardactions{
    display: grid;
    place-items: center;
  }
</style>
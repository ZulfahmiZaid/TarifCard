<template>

    <v-card width="300" class="tarifcard" elevation="10">

      <div class="content">
        <div class="playbutton py-3">
          <v-icon icon="mdi-play-circle"></v-icon>
        </div>

        <v-card-title class="title pb-4">
          Free Access to <br>
          Acme Music <sup class="r-symbol"><v-icon icon="mdi-alpha-r-circle-outline"/></sup>
        </v-card-title>

        <v-card-subtitle class="subtitle pb-2">
          <v-icon icon="mdi-check" class="text-warning"></v-icon>
          <p>Stream 60 million songs on <br>
            your device</p>
        </v-card-subtitle>

        <v-card-subtitle class="subtitle">
          <v-icon icon="mdi-close" class="text-warning"></v-icon>
          <p>No internet access</p>
        </v-card-subtitle>

      </div>

      <v-card-actions class="actions">
        <button class="action">Connect now</button>
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
    height: 400px;
    border-radius: 10px;
    position: relative;
    background: linear-gradient(
        160deg,
        rgba(49, 208, 179, 1) 40%,
        rgba(87, 255, 177, 0.6),
        rgba(189, 243, 207, 0.7));
    z-index: 1;
  }
  .content{
    width: 100%;
    height: calc(75% - 15px);
    position: absolute;
    top: 15px;
    background: rgba(255, 255, 255, 1);
    z-index: 2;
  }
  .playbutton{
    display: grid;
    place-items: center;
    color: rgba(49, 208, 179, 1);
    font-size: 2.5rem;
  }
  .r-symbol{
    font-size: .5rem;
  }
  .title{
    font-weight: bold;
    text-align: center;
  }
  .subtitle{
    margin-left: 20px;
    display: grid;
    grid-template-columns: 30px auto;
  }
  .subtitle > p{
    text-align: left;
  }
  .actions{
    width: 100%;
    height: 25%;
    display: grid;
    place-items: center;
    position: absolute;
    bottom: 0;
  }
  .action{
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .action:hover{
    cursor:pointer;
  }
</style>
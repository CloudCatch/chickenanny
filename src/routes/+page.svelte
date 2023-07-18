<svelte:head>
    <title>Chicken Nanny</title>
</svelte:head>

<script>
    import { signIn, signOut } from "@auth/sveltekit/client"
    import { page } from "$app/stores"
    import * as GMaps from '@googlemaps/js-api-loader'
    
    const { Loader } = GMaps;

    const loader = new Loader({
        apiKey: "AIzaSyAO5_X5yWdTiHWvXXMVJlcpk7trCcTqRFY",
    });

    const mapOptions = {
    center: {
        lat: 37.8097343,
        lng: -98.5556199,
    },
    disableDefaultUI: true,
    zoom: 5
    };

    // Promise
loader
  .load()
  .then((google) => {
    new google.maps.Map(document.getElementById("map"), mapOptions);
    console.log( google );
  })
  .catch(e => {
    // do something
  });
</script>

<p>
    {#if $page.data.session}
      {#if $page.data.session.user?.image}
        <span
          style="background-image: url('{$page.data.session.user.image}')"
          class="avatar"
        />
      {/if}
      <span class="signedInText">
        <small>Signed in as</small><br />
        <strong>{$page.data.session.user?.name ?? "User"}</strong>
      </span>
      <button on:click={() => signOut()} class="button">Sign out</button>
    {:else}
      <span class="notSignedInText">You are not signed in</span>
      <button on:click={() => signIn("facebook")}>Sign In with Facebook</button>
    {/if}
  </p>

<div id="map"></div>

<style>
    #map {
        width: 100%;
        height: 100vh;
    }
</style>